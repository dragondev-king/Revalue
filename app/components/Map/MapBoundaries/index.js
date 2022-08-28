import {
  BOUNDARIES_ACTIVE,
  BOUNDARIES_HOVER,
  BOUNDARIES_INACTIVE,
  BOUNDARIES_LEVEL_REGION,
  BOUNDARIES_SUBSCRIBED,
  BOUNDARIES_TYPE_REGION,
  BOUNDARIES_UNSUBSCRIBED,
} from '../constants';

import transparentIcon from './transparent.png';
import config from './config';

class MapBoundaries {
  constructor(
    map,
    boundaries,
    propertyLocation,
    setPropertyLocation,
    disabled,
  ) {
    this.map = map;
    this.disabled = disabled;
    this.boundaries = boundaries;
    this.setPropertyLocation = setPropertyLocation;
    this.mouseoverEvent = null;
    this.mouseoutEvent = null;

    this.defaultMarkerLabel = {
      fontFamily: 'Roboto,sans-serif',
      fontWeight: '600',
      fontSize: '18px',
      text: '',
      color: '#666',
    };

    this.marker = new window.google.maps.Marker({
      position: null,
      map: this.map,
      label: this.defaultMarkerLabel,
      icon: transparentIcon,
      visible: true,
    });

    this.mouseoverEvent = null;
    this.mouseoutEvent = null;

    this.init();
  }

  init() {
    const geoJson = this.createGeoJson();
    this.addGeoJsonToMap(geoJson);
    this.setStyle();
    this.addEventListeners();
  }

  createGeoJson() {
    const locationFeature = this.getLocationBoundaries();

    return {
      type: 'FeatureCollection',
      features: [...locationFeature],
    };
  }

  getLocationBoundaries() {
    if (!this.boundaries) {
      return [];
    }
    return this.boundaries.map(location => {
      const subscribed = location.subscribed
        ? BOUNDARIES_SUBSCRIBED
        : BOUNDARIES_UNSUBSCRIBED;
      const active = location.active ? BOUNDARIES_ACTIVE : BOUNDARIES_INACTIVE;
      return {
        type: 'Feature',
        properties: {
          name: location.name,
          fullName: location.fullName,
          type: BOUNDARIES_TYPE_REGION,
          subscribed,
          active,
        },
        geometry: location.geoShape,
      };
    });
  }

  addGeoJsonToMap(json) {
    this.map.data.addGeoJson(json);
  }

  setStyle() {
    this.map.data.setStyle(feature => {
      const type = feature.getProperty('type');
      const active = feature.getProperty('active');

      return config[BOUNDARIES_LEVEL_REGION][type][active];
    });
  }

  addEventListeners() {
    if (this.map && this.map.data && !this.map.disabled) {
      this.mouseoverEvent = this.map.data.addListener('mouseover', e =>
        this.changeStyle(e),
      );
      this.mouseoutEvent = this.map.data.addListener('mouseout', e =>
        this.revertStyle(e),
      );
      this.clickEvent = this.map.data.addListener('click', e =>
        this.changeLocation(e),
      );
    }
  }

  changeStyle(event) {
    const active = event.feature.getProperty('active');

    if (active !== BOUNDARIES_INACTIVE) {
      this.hideMarker();
      return;
    }

    this.map.data.revertStyle();
    this.map.data.overrideStyle(event.feature, config[BOUNDARIES_HOVER]);

    this.updateMarkerOptions(event.feature);
  }

  updateMarkerOptions(feature) {
    const center = this.getCenter(feature);

    if (center) {
      this.marker.setPosition(center);
    }
    this.marker.setLabel({
      ...this.defaultMarkerLabel,
      text: feature.getProperty('name'),
    });

    this.showMarker();
  }

  hideMarker() {
    this.marker.setVisible(false);
  }

  showMarker() {
    this.marker.setVisible(true);
  }

  getCenter(feature) {
    // POLYGON and MULTIPOLYGON Handler
    let bounds;
    try {
      // POLYGON
      bounds = new window.google.maps.LatLngBounds();
      feature
        .getGeometry()
        .getArray()
        .forEach(polygon => {
          polygon.getArray().forEach(latLng => {
            bounds.extend(latLng);
          });
        });
    } catch {
      // MULTIPOLYGON
      bounds = new window.google.maps.LatLngBounds();
      feature
        .getGeometry()
        .getArray()
        .forEach(polygon => {
          polygon.getArray().forEach(path => {
            path.getArray().forEach(latLng => bounds.extend(latLng));
          });
        });
    }
    return bounds.getCenter();
  }

  revertStyle() {
    this.map.data.revertStyle();
    this.hideMarker();
  }

  changeLocation(e) {
    return this.selectLocation(e);
  }

  selectLocation(e) {
    const { feature } = e;

    const active = feature.getProperty('active');
    if (active === BOUNDARIES_ACTIVE) {
      return;
    }

    this.setPropertyLocation(feature.getProperty('fullName'));
    this.hideMarker();
  }

  remove() {
    this.removeBoundaries();
    this.removeEventListeners();
    this.removeMarker();
  }

  removeBoundaries() {
    this.map.data.forEach(feature => {
      this.map.data.remove(feature);
    });
  }

  removeEventListeners() {
    window.google.maps.event.removeListener(this.mouseoverEvent);
    window.google.maps.event.removeListener(this.mouseoutEvent);
    window.google.maps.event.removeListener(this.clickEvent);
  }

  removeMarker() {
    this.marker.setMap(null);
  }
}

export default MapBoundaries;
