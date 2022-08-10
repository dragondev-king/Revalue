import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UsefulareaIcon from 'images/usefulAreaIcon.png';
import GrossareaIcon from 'images/grossareaIcon.png';
import messages from '../../messages';
import Carousel from '../Carousel';
import { useStyles } from '../../styles';

const PropertyInformationAndCarousel = ({ props }) => {
  const classes = useStyles();
  return (
    <Grid item container direction="row">
      <Grid item container xs={6} className="pr-40">
        <Box>
          <Box>
            <Typography className={classes.locationLabel}>
              {props.intl.formatMessage({
                ...messages.location,
              })}
            </Typography>
            <Typography className={classes.sectionTitle}>
              {props &&
                props.analysis &&
                props.analysis.property &&
                props.analysis.property.country &&
                props.analysis.property.country}
            </Typography>
          </Box>
          <Box className={classes.areaWrapper}>
            <Box className={classes.areaItem}>
              <Box className={classes.areaIcon}>
                <img src={GrossareaIcon} width={40} alt="gross area" />
              </Box>
              <Box className={classes.areaDetail}>
                <Typography style={{ fontWeight: 'bold' }}>
                  {props &&
                    props.analysis &&
                    props.analysis.area &&
                    props.analysis.area}{' '}
                  M2
                </Typography>
                <Typography style={{ fontSize: '14px', color: '#565853' }}>
                  {props.intl.formatMessage({
                    ...messages.grossArea,
                  })}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.areaItem}>
              <Box className={classes.areaIcon}>
                <img src={UsefulareaIcon} width={40} alt="useful area" />
              </Box>
              <Box className={classes.areaDetail}>
                <Typography style={{ fontWeight: 'bold' }}>
                  {props &&
                    props.analysis &&
                    props.analysis.area &&
                    props.analysis.area}{' '}
                  M2
                </Typography>
                <Typography style={{ fontSize: '14px', color: '#565853' }}>
                  {props.intl.formatMessage({
                    ...messages.usefulArea,
                  })}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.typeWrapper}>
            <Box className={classes.typeItem}>
              {props.intl.formatMessage({
                ...messages.type2,
              })}
              :{' '}
              <Box className={classes.typeItemColored} component="span">
                {props &&
                  props.analysis &&
                  props.analysis.property &&
                  props.analysis.property.type &&
                  props.analysis.property.type}
              </Box>
            </Box>
            <Box className={classes.typeItem}>
              {props.intl.formatMessage({
                ...messages.condition2,
              })}
              :{' '}
              <Box className={classes.typeItemColored} component="span">
                {props &&
                  props.analysis &&
                  props.analysis.property &&
                  props.analysis.property.condition &&
                  props.analysis.property.condition}
              </Box>
            </Box>
            <Box className={classes.typeItem}>
              {props.intl.formatMessage({
                ...messages.typology,
              })}
              :{' '}
              <Box className={classes.typeItemColored} component="span">
                {props &&
                  props.analysis &&
                  props.analysis.property &&
                  props.analysis.property.typology &&
                  props.analysis.property.typology}
              </Box>
            </Box>
          </Box>
          <Box className={classes.propertyDescription}>
            {props &&
              props.analysis &&
              props.analysis.property &&
              props.analysis.property.country &&
              props.analysis.property.country}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} className={classes.fixHeight}>
        <Carousel />
      </Grid>
    </Grid>
  );
};

export default PropertyInformationAndCarousel;
