import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PinDrop from '@material-ui/icons/PinDrop';
import { makeStyles } from '@material-ui/core/styles';

import messages from '../messages';
import image from '../../../../images/comingsoon.png';

const useStyles = makeStyles({
  container: {
    padding: '20px',
    margin: '0',
    width: '100%',
    height: '100%',
  },
  nameValueViewrContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  infoContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    padding: '0 !important',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '28px',
    textTransform: 'capitalize',
    color: '#31342B',
    paddingBottom: '12px',
  },
});

export const ItemInfo = props => {
  const styles = useStyles();
  const { item } = props;

  const NameValueViewer = ({
    name,
    value,
    valueSymbol = '€',
    valueUnit = '',
    fontSize = '14px',
    nameColor = '#616683',
    valueColor = '#31342B',
    fontWeight = '400',
  }) => (
    <div className={styles.nameValueViewrContainer}>
      <span style={{ fontSize, color: nameColor, fontWeight }}>{`${name}${
        value ? ':' : ''
      }`}</span>
      <span
        style={{ fontSize, color: valueColor, fontWeight }}
      >{`${valueSymbol} ${value}${valueUnit}`}</span>
    </div>
  );

  return (
    <Paper variant="outlined">
      <Grid item container spacing={3} className={styles.container}>
        <Grid item lg={5} md={12} xs={12} className={styles.content}>
          <img src={image} alt="" />
        </Grid>
        <Grid item lg={7} md={12} xs={12} className={styles.content}>
          <div className={styles.location}>
            <PinDrop />
            {item.propertyName}
          </div>
          <div className={styles.infoContainer}>
            <NameValueViewer
              name={item.propertyLocation}
              nameColor="#616683"
              fontSize="16px"
              fontWeight="500"
              value=""
              valueSymbol=""
            />
            <NameValueViewer
              name={props.intl.formatMessage({
                ...messages.askingPrice,
              })}
              value={item.propertyAskingPrice}
            />
            <NameValueViewer
              name={props.intl.formatMessage({
                ...messages.acquistionPrice,
              })}
              value={item.transactionPrice}
            />
            <NameValueViewer
              name={props.intl.formatMessage({
                ...messages.requiredCapital,
              })}
              value={item.requiredInitialCapital}
            />
            {item.monthlyRent && (
              <NameValueViewer
                name={props.intl.formatMessage({
                  ...messages.monthlyRent,
                })}
                value={item.monthlyRent}
              />
            )}
            <NameValueViewer
              name={props.intl.formatMessage({
                ...messages.multipleOnInvestedCapital,
              })}
              value={item.propertyRooms}
            />
            <NameValueViewer
              name={props.intl.formatMessage({
                ...messages.internalRateOfReturn,
              })}
              value={item.internalRateOfReturn}
            />
            <NameValueViewer
              name={props.intl.formatMessage({
                ...messages.profitAfterTax,
              })}
              value={item.profitAfterTax}
              fontSize="18px"
              fontWeight="500"
              nameColor="#31342B"
              valueColor="#0083FC"
            />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
