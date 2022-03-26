import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  ctrlWidth: {
    minWidth: '110px',
    marginRight: theme.spacing(6),
  },
  ctrlEndWidth: {
    minWidth: '110px',
  },
  doubleWidth: {
    minWidth: '270px',
    marginRight: theme.spacing(6),
  },
  inputWidth: {
    maxWidth: '110px',
    marginRight: theme.spacing(6),
  },
  inputLgWidth: {
    minWidth: '270px',
    marginRight: theme.spacing(6),
  },
  inputEndWidth: {
    maxWidth: '110px',
  },
  inputEndLgWidth: {
    minWidth: '270px',
  },
  rowSpacing: {
    marginTop: '32px',
  },
  title: {
    fontWeight: 'Bold',
    marginTop: '24px',
    marginBottom: '18px',
  },
  customizeBtn: {
    color: 'white',
    marginTop: '48px',
    marginBottom: '48px',
  },
  tableHead: {
    color: 'white',
    fontSize: '14px',
  },
  tableBody: {
    fontSize: '14px',
    '&:nth-of-type(odd)': {
      backgroundColor: '#CDD4EA',
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
  fixHeight: {
    minHeight: '300px',
    maxHeight: '300px',
  },
  iconMr: {
    marginLeft: '5px',
    marginBottom: '1px',
    padding: '0px',
  },
  iconSize: {
    width: '16px',
  },
  labelWidth: {
    minWidth: '170px',
  },
  accordion: {
    width: '100%',
    marginTop: '32px',
  },
  tableLabel: {
    fontWeight: 'bold',
  },
  label: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    right: '22px !important',
    bottom: '0px',
  },

  labelShrinked: {
    right: 'unset',
  },
}));

export { useStyles };
