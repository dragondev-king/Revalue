import React, { Component } from 'react';

import MapBoundaries from '../MapBoundaries';
import {
  ZOOM_MAX,
  ZOOM_MEDIUM,
  ZOOM_OUT_LIMIT,
  ZOOM_SMALL,
} from '../constants';

class MapComponent extends Component {
  constructor(props) {
    super(props);

    this.map = null;
    this.bounds = null;
    this.boundaries = null;
    this.zoomLevels = [ZOOM_MAX, ZOOM_MEDIUM, ZOOM_SMALL];
    this.mapRef = React.createRef();
  }

  state = {
    zoom: this.props.center.zoom,
  };

  componentDidMount() {
    const mapOptions = {
      zoom: this.state.zoom,
      center: this.props.center.position,
      streetViewControl: false,
      mapTypeControlOptions: {
        mapTypeIds: [],
      },
      minZoom: ZOOM_OUT_LIMIT,
      styles: [
        {
          featureType: 'poi.business',
          stylers: [{ visibility: 'off' }],
        },
      ],
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_CENTER,
      },
    };
    this.map = new window.google.maps.Map(this.mapRef.current, mapOptions);
    window.google.maps.event.addListener(this.map, 'zoom_changed', () =>
      this.onZoomChanged(),
    );

    if (this.props.isLoaded) {
      this.setBoundaries();
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.map) {
      if (this.props.center !== nextProps.center) {
        this.setCenterAndZoom(nextProps.center);
      }
      if (this.props.isLoaded === true && nextProps.isLoaded === false) {
        this.removeDataFromMap();
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.isLoaded === true && this.props.isLoaded === false) {
      return true;
    }
    if (nextProps.boundaries !== this.props.boundaries) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    if (this.map) {
      this.removeDataFromMap();
      this.addDataToMap();
    }
  }

  onZoomChanged(forceUpdate = false) {
    const nextZoom = this.map.getZoom();
    const prevZoom = this.state.zoom;

    let isUpdated = false;

    this.zoomLevels.forEach(zoomLevel => {
      if (
        (nextZoom === zoomLevel && prevZoom === zoomLevel + 1) ||
        (nextZoom === zoomLevel + 1 && prevZoom === zoomLevel) ||
        (forceUpdate && !isUpdated)
      ) {
        isUpdated = true;
      }
    });
    this.setState({ zoom: nextZoom });
  }

  setBoundaries() {
    this.boundaries = new MapBoundaries(
      this.map,
      this.props.boundaries,
      this.props.location,
      this.props.setLocation,
    );
  }

  setCenter() {
    this.map.setCenter(this.props.center.position);
    this.map.setZoom(this.props.center.zoom);
  }

  setCenterAndZoom({ position, zoom }) {
    this.map.setCenter(position);
    this.map.setZoom(zoom);
  }

  addDataToMap() {
    if (this.props.isLoaded) {
      this.setBoundaries();
    }
  }

  removeDataFromMap() {
    if (this.boundaries) {
      this.boundaries.remove();
    }
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: '100%' }}
        id="map"
        ref={this.mapRef}
      />
    );
  }
}

export default MapComponent;
