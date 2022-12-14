import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  pageTitleContainer: {
    left: '90px',
    marginBottom: '24px',
  },
  pageTitle: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '23px',
  },
  stepPageDescription: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '19px',
    padding: '9px 0',
    color: '#888888',
  },
  title: {
    fontWeight: 'Bold',
    marginTop: '24px',
    marginBottom: '18px',
  },
  customizeButton: {
    color: '#FFFFFF',
    margin: '30px 0 50px',
    background: '#0085FF !important',
    borderRadius: '7px',
    width: '286px',
    height: '44px',
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: '16px',
  },
  customizeDisabledButton: {
    color: 'rgba(0, 0, 0, 0.26)',
    boxShadow: 'none',
    margin: '30px 0 50px',
    backgroundColor: 'rgba(0, 0, 0, 0.12) !important',
    borderRadius: '7px',
    width: '286px',
    height: '44px',
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: '16px',
  },
  stepperContainer: {
    height: '100%',
    borderRadius: '8px',
  },
  stepperLabel: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#333333',
  },
  stepperDetail: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#888888',
  },
  locationMapContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '350px',
  },
  locationContainer: {
    width: '60%',
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: '32px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between !important',
    borderRadius: '8px',
  },
  showDetailContainer: {
    display: 'flex',
    marginBottom: '15px',
  },
  divider: {
    width: '100%',
    margin: 'auto',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '50px',
  },
  tableContainer: {
    background: '#FFFFFF',
    padding: '30px 25px',
    width: '100%',
    borderRadius: '8px',
    marginTop: '20px',
  },
  tableHeading: {
    color: '#31342B !important',
    fontSize: '24px',
    textTransform: 'capitalize',
    marginBottom: '24px',
  },
  gridRoot: {
    border: 0,
  },
  loading: {
    color: 'white',
    marginTop: '2px',
    marginBottom: '2px',
    marginLeft: '20px',
    marginRight: '20px',
  },
  accordion: {
    width: '100%',
    marginTop: '32px',
  },
  validation: {
    color: '#bf1650',
  },
  searchIcon: {
    marginRight: '10px',
    color: '#0083FC',
  },
  orText: {
    fontSize: '20px',
  },
}));
