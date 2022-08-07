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
              Oeiras, Lisbon, Portugal
            </Typography>
          </Box>
          <Box className={classes.areaWrapper}>
            <Box className={classes.areaItem}>
              <Box className={classes.areaIcon}>
                <img src={GrossareaIcon} width={40} alt="gross area" />
              </Box>
              <Box className={classes.areaDetail}>
                <Typography style={{ fontWeight: 'bold' }}>500 M2</Typography>
                <Typography style={{ fontSize: '14px', color: '#565853' }}>
                  Gross area
                </Typography>
              </Box>
            </Box>
            <Box className={classes.areaItem}>
              <Box className={classes.areaIcon}>
                <img src={UsefulareaIcon} width={40} alt="useful area" />
              </Box>
              <Box className={classes.areaDetail}>
                <Typography style={{ fontWeight: 'bold' }}>280 M2</Typography>
                <Typography style={{ fontSize: '14px', color: '#565853' }}>
                  Useful area
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
                Appartment
              </Box>
            </Box>
            <Box className={classes.typeItem}>
              {props.intl.formatMessage({
                ...messages.condition2,
              })}
              :{' '}
              <Box className={classes.typeItemColored} component="span">
                New
              </Box>
            </Box>
            <Box className={classes.typeItem}>
              {props.intl.formatMessage({
                ...messages.typology,
              })}
              :{' '}
              <Box className={classes.typeItemColored} component="span">
                T2
              </Box>
            </Box>
          </Box>
          <Box className={classes.propertyDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
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
