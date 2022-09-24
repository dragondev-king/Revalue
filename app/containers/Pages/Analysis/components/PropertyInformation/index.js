import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import UsefulAreaIcon from 'images/usefulAreaIcon.png';
import GrossAreaIcon from 'images/grossAreaIcon.png';
import { Skeleton } from '@material-ui/lab';
import { formatNumber } from 'utils/formatNumber';
import messages from '../../messages';
import Carousel from '../Carousel';
import { useStyles } from '../../styles';

const PropertyInformation = ({ props }) => {
  const classes = useStyles();
  return (
    <>
      {!props.isGettingAnalysisById ? (
        <Grid item container direction="row">
          <Grid item container xs={6} className="pr-40">
            <Grid>
              <Grid>
                <Typography className={classes.locationLabel}>
                  {props.intl.formatMessage({
                    ...messages.location,
                  })}
                </Typography>
                <Typography className={classes.sectionTitle}>
                  {props.analysis.location}
                </Typography>
              </Grid>
              <Grid className={classes.areaWrapper}>
                <Grid className={classes.areaItem}>
                  <Grid className={classes.areaIcon}>
                    <img src={UsefulAreaIcon} width={40} alt="useful area" />
                  </Grid>
                  <Grid className={classes.areaDetail}>
                    <Typography style={{ fontWeight: 'bold' }}>
                      {formatNumber(props.analysis.area)} m²
                    </Typography>
                    <Typography style={{ fontSize: '14px', color: '#565853' }}>
                      {props.intl.formatMessage({
                        ...messages.area,
                      })}
                    </Typography>
                  </Grid>
                </Grid>
                {props.analysis.property.grossArea && (
                  <Grid className={classes.areaItem}>
                    <Grid className={classes.areaIcon}>
                      <img src={GrossAreaIcon} width={40} alt="gross area" />
                    </Grid>
                    <Grid className={classes.areaDetail}>
                      <Typography style={{ fontWeight: 'bold' }}>
                        {formatNumber(props.analysis.property.grossArea)} m²
                      </Typography>
                      <Typography
                        style={{ fontSize: '14px', color: '#565853' }}
                      >
                        {props.intl.formatMessage({
                          ...messages.grossArea,
                        })}
                      </Typography>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              <Grid className={classes.typeWrapper}>
                <Grid className={classes.typeItem}>
                  {props.intl.formatMessage({
                    ...messages.type,
                  })}
                  :{' '}
                  <Grid className={classes.typeItemColored} component="span">
                    {props.analysis.property.type}
                  </Grid>
                </Grid>
                <Grid className={classes.typeItem}>
                  {props.intl.formatMessage({
                    ...messages.condition,
                  })}
                  :{' '}
                  <Grid className={classes.typeItemColored} component="span">
                    {props.analysis.property.condition}
                  </Grid>
                </Grid>
                <Grid className={classes.typeItem}>
                  {props.intl.formatMessage({
                    ...messages.typology,
                  })}
                  :{' '}
                  <Grid className={classes.typeItemColored} component="span">
                    {props.analysis.property.typology}
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={classes.propertyDescription}>
                {props.analysis.property.description}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.fixHeight}>
            <Carousel key="carousel" props={props} />
          </Grid>
        </Grid>
      ) : (
        <Skeleton animation="wave" count={6} height={100} />
      )}
    </>
  );
};

export default PropertyInformation;
