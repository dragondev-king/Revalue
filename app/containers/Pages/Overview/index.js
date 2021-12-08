import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Paper from '@material-ui/core/Paper';
import reducer from './reducer';
import PaperChartLine from '../../../components/PaperChartLine';
import PaperChartLineComplex from '../../../components/PaperChartLineComplex';
import PaperChartBar from '../../../components/PaperChartBar';
import PaperMap from '../../../components/PaperMap';
import PaperChartPie from '../../../components/PaperChartPie';
import { getChartsByLocation } from './actions';
import {
  makeSelectCharts,
  makeSelectCustomCharts,
  makeSelectIsGettingCharts,
} from './selectors';
import PaperChartLineSimple from '../../../components/PaperChartLineSimple';
import { makeSelectLocation, makeSelectTypology } from '../Analysis/selectors';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  gridPaper: {
    minWidth: '275px',
    minHeight: '200px',
    // maxHeight: '170px',
    // maxWidth: '430px',
  },
  gridMap: {
    minHeight: '400px',
    minWidth: '577px',
  },
  height: {
    height: '100%',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

export function Overview(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useInjectReducer({ key: 'overview', reducer });

  useEffect(() => {
    if (props.location) {
      props.getChartsByLocation(props.location);
    }
  }, [props.location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function returnChart(chart, xs, color) {
    switch (chart.type) {
      case 'PIE':
        return (
          <Grid item className={classes.gridPaper} xs={xs}>
            <PaperChartPie
              data={chart.data}
              title={chart.title}
              tooltip={chart.info}
            />
          </Grid>
        );
      case 'LINE':
        return (
          <Grid item className={classes.gridPaper} xs={xs}>
            <PaperChartLine
              measure={chart.measure}
              data={chart.data}
              title={chart.title}
              value={chart.currentValue}
              month={chart.currentDate}
              difference={chart.differenceLastDate}
              tooltip={chart.info}
              color={color}
            />
          </Grid>
        );
      case 'LINE_SIMPLE':
        return (
          <Grid item className={classes.gridPaper} xs={xs}>
            <PaperChartLineSimple
              measure={chart.measure}
              data={chart.data}
              title={chart.title}
              value={chart.currentValue}
              month={chart.currentDate}
              difference={chart.differenceLastDate}
              tooltip={chart.info}
              color={color}
            />
          </Grid>
        );
      case 'LINE_COMPLEX':
        return (
          <Grid item className={classes.gridPaper} xs={12}>
            <PaperChartLineComplex
              measure={chart.measure}
              data={chart.data}
              title={chart.title}
              value={chart.currentValue}
              month={chart.currentDate}
              difference={chart.differenceLastDate}
              tooltip={chart.info}
            />
          </Grid>
        );
      case 'BAR':
        return (
          <Grid item className={classes.gridPaper} xs={xs}>
            <PaperChartBar
              data={chart.data}
              title={chart.title}
              tooltip={chart.info}
            />
          </Grid>
        );
      case 'TOTAL':
        return <></>;
      default:
        return <></>;
    }
  }

  function returnSkeletonChart(xs, length) {
    const array = Array.from({ length }, (v, i) => i);
    if (array) {
      return (
        <>
          {array.map(index => (
            <Grid item className={classes.gridPaper} xs={xs} key={index}>
              <Paper className={classes.height}>
                <Skeleton
                  variant="rect"
                  animation="wave"
                  className={classes.height}
                />
              </Paper>
            </Grid>
          ))}
        </>
      );
    }
    return (
      <Grid item className={classes.gridPaper} xs={xs}>
        <Skeleton variant="rect" animation="wave" className={classes.height} />
      </Grid>
    );
  }

  function returnEmptyChart(xs, length) {
    const array = Array.from({ length }, (v, i) => i);
    if (array) {
      return (
        <>
          {array.map(index => (
            <Grid item className={classes.gridPaper} xs={xs} key={index}>
              <Paper className={classes.height} />
            </Grid>
          ))}
        </>
      );
    }
    return <Grid item className={classes.gridPaper} xs={xs} />;
  }

  function renderTotalCount() {
    if (props.charts && props.charts.length > 0) {
      // eslint-disable-next-line array-callback-return,consistent-return
      return props.charts.map(chart => {
        if (chart.title === 'Total') {
          if (chart.data.length > 0) {
            return (
              <Grid>
                <Typography
                  variant="h6"
                  style={{ display: 'inline-block', marginLeft: '5px' }}
                >
                  {chart.data[chart.data.length - 1].value}
                </Typography>
                <Typography
                  variant="h5"
                  style={{ display: 'inline-block', marginLeft: '5px' }}
                >
                  {props.intl.formatMessage({ ...messages.total })}
                </Typography>
                <Typography
                  variant="h2"
                  style={{ display: 'inline-block', marginLeft: '10px' }}
                >
                  {chart.data[chart.data.length - 1].name}
                </Typography>
              </Grid>
            );
          }
          return <></>;
        }
      });
    }
    return <></>;
  }

  function renderFirstRow() {
    if (!props.isGettingCharts) {
      if (props.charts && props.charts.length > 0) {
        return props.charts.map((chart, index) => {
          if (index <= 3) {
            const colors = ['#1C77FF', '#5348B4', '#8DD1E1', '#F98700'];
            return returnChart(chart, 3, colors[index]);
          }
          return returnEmptyChart(3);
        });
      }
      return returnEmptyChart(3, 4);
    }
    return returnSkeletonChart(3, 4);
  }

  function renderSecondRow() {
    if (!props.isGettingCharts) {
      if (props.charts && props.charts.length > 0) {
        return props.charts.map((chart, index) => {
          if (index >= 4 && index <= 5) {
            return returnChart(chart, 6);
          }
          return returnEmptyChart(6);
        });
      }
      return returnEmptyChart(6, 2);
    }
    return returnSkeletonChart(6, 2);
  }

  function renderThirdRow() {
    if (!props.isGettingCharts) {
      if (props.charts && props.charts.length > 0) {
        return props.charts.map((chart, index) => {
          if (index >= 6 && index <= 7) {
            return returnChart(chart, 6);
          }
          return returnEmptyChart(6);
        });
      }
      return returnEmptyChart(6, 2);
    }
    return returnSkeletonChart(6, 2);
  }

  function renderFourthRow() {
    if (!props.isGettingCharts) {
      if (props.charts && props.charts.length > 0) {
        return props.charts.map((chart, index) => {
          if (index >= 8 && index <= 9) {
            return returnChart(chart, 3);
          }
          return returnEmptyChart(3);
        });
      }
      return returnEmptyChart(3, 4);
    }
    return returnSkeletonChart(3, 4);
  }

  return (
    <div>
      <Helmet>
        <title>Overview</title>
        <meta name="description" content="Description of Overview" />
      </Helmet>
      <Grid key="total-count" item container spacing={2} className="pb-16">
        {renderTotalCount()}
      </Grid>
      <Grid item container spacing={2}>
        <Grid key="first-row" item container spacing={2} direction="row">
          {renderFirstRow()}
        </Grid>
        <Grid item container spacing={2} direction="row">
          <Grid item container xs={6}>
            <Grid key="second-row" item container spacing={2} className="pb-16">
              {renderSecondRow()}
            </Grid>
            <Grid key="third-row" item container spacing={2}>
              {renderThirdRow()}
            </Grid>
          </Grid>
          <Grid key="third-row-map" item xs={6} className={classes.gridMap}>
            <PaperMap />
          </Grid>
        </Grid>
        <Grid key="fourth-row" item container spacing={2} direction="row">
          {renderFourthRow()}
        </Grid>
        {props.customCharts && props.customCharts.length > 0 && (
          <Grid item xs spacing={2} direction="row" className="pt-30">
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              {props.customCharts.map((chart, index) => (
                <Tab label={chart.name} index={index} />
              ))}
            </Tabs>
            <Grid className="pt-30">
              {props.customCharts.map((chart, index) => (
                <TabPanel value={value} index={index}>
                  <Grid container spacing={2} direction="row">
                    {chart.data &&
                      // eslint-disable-next-line no-shadow
                      chart.data.map((data, index) => {
                        const colors = [
                          '#1C77FF',
                          '#5348B4',
                          '#30B6D9',
                          '#F98700',
                        ];
                        return returnChart(data, 6, colors[index]);
                      })}
                  </Grid>
                </TabPanel>
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  typology: makeSelectTypology(),
  location: makeSelectLocation(),
  charts: makeSelectCharts(),
  isGettingCharts: makeSelectIsGettingCharts(),
  customCharts: makeSelectCustomCharts(),
});

function mapDispatchToProps(dispatch) {
  return {
    getChartsByLocation: location => dispatch(getChartsByLocation(location)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  injectIntl,
)(Overview);
