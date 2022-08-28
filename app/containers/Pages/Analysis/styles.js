import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  analysisWrapper: {
    padding: '0 25px',
  },
  pageTitle: {
    color: '#565853 !important',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
  },
  pageBiggerTitle: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 24,
    textTransform: 'capitalize',
    color: '#31342B !important',
    borderBottom: '1px solid lightblue',
  },
  overviewStatsGrid: {
    margin: '30px 0px 30px 0px',
    flexWrap: 'wrap',
  },
  overviewStatsCard: {
    background: 'white',
    padding: '16px',
    borderRadius: '4px',
    maxWidth: '32.5% !important',
    minWidth: '220px',
  },
  overviewStatsTitle: {
    color: '#31342B !important',
    fontSize: 14,
  },
  overviewStatsPrice: {
    color: '#31342B',
    fontWeight: 700,
    fontSize: 24,
  },
  typeWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    margin: '20px 0',
  },
  typeItem: {},
  typeItemColored: {
    color: '#0083FC',
    fontSize: '14px',
    fontWeight: '700',
  },
  propertyDescription: {
    fontSize: '16px',
    color: '#7C7C7C',
    textAlign: 'justify',
  },
  locationLabel: {
    color: '#7C7C7C',
    fontSize: '16px',
    fontWeight: '600',
  },
  sectionTitle: {
    color: '#31342B',
    fontSize: '20px',
    fontWeight: '600',
  },
  areaWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginTop: '20px',
  },
  areaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  areaIcon: {},
  areaDetail: {},
  propertyInformationAndMapContainer: {
    margin: '40px 0',
  },
  sectionTableWrapper: {
    width: '100%',
  },

  salesActivityHistoryContainer: {
    margin: '40px 0',
  },
  settingIconWrapper: {
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
  },
  settingIconContainer: {
    position: 'fixed',
    bottom: '10px',
    right: '20px',
    zIndex: '10',
  },
  iconButton: {
    width: '38px',
  },
  breakdownTableContainer: {
    maxHeight: 470,
  },
  breakdownTablePaper: {
    width: '100%',
    height: '100%',
    marginTop: '16px',
  },
}));

export { useStyles };
