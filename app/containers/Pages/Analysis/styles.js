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
    margin: '40px 0',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  overviewStatsCard: {
    background: 'white',
    padding: '16px',
    borderRadius: '4px',
    maxWidth: '24% !important',
  },
  overviewStatsTitle: {
    color: '#31342B !important',
    fontSize: 16,
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
  },
  topSettingIconWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  acuisitionDepTableContainer: {
    marginTop: '40px',
  },
}));

export { useStyles };
