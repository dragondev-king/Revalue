import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import InfoIcon from '@material-ui/icons/Info';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from 'containers/Pages/Analysis/style';
import messages from 'containers/Pages/Analysis/messages';
import Skeleton from 'react-loading-skeleton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Index = ({ props }) => {
  const classes = useStyles();

  function handleChange(event) {
    const { name, value } = event.target;
    props.setInputValue(name, value);
    // props.setInputError(name, '');
    // props.setAnalyzeButtonDisabled(false);
  }
  function financingAssumptionsAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item className="pb-0">
          <Typography className={`${classes.title} m-0`}>
            {props.intl.formatMessage({
              ...messages.financingAssumptions,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.financingRate} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.financingRateInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.financingRate}
                name="financingRate"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.capexFinanced} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capexFinancedInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.capexFinanced}
                name="capexFinanced"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.interestRate} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.interestRateInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.interestRate}
                name="interestRate"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.amortization} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.amortizationInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.amortization}
                name="amortization"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.bankCommission} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.bankCommissionInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.bankCommission}
                name="bankCommission"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.earlyRepaymentFee} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.earlyRepaymentFeeInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.earlyRepaymentFee}
                name="earlyRepaymentFee"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function areaAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item className="pb-0">
          <Typography className={`${classes.title} m-0`}>
            {props.intl.formatMessage({
              ...messages.area,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.grossArea} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.grossAreaInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.grossArea}
                name="grossArea"
                readOnly
                startAdornment={
                  <InputAdornment position="start">㎡</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.usefulArea} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.usefulAreaInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.Gpa}
                name="usefulArea"
                readOnly
                startAdornment={
                  <InputAdornment position="start">㎡</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function operationAssumptionsAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item className="pb-0">
          <Typography className={`${classes.title} m-0`}>
            {props.intl.formatMessage({
              ...messages.operationAssumptions,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.capex} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capexInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.Capex}
                name="Capex"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.condominiumCosts} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.condominiumCostsInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.condominiumCosts}
                name="usefulArea"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.propertyTaxRate} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.propertyTaxRateInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.propertyTaxRate}
                name="usefulArea"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function acquisitionAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item className="pb-0">
          <Typography className={`${classes.title} m-0`}>
            {props.intl.formatMessage({
              ...messages.acquisition,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.bidAsk} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.bidAskInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.bidAsk}
                name="bidAsk"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.entryBrokerFee} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.entryBrokerFeeInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.entrBrokerFee}
                name="entryBrokerFee"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function taxesAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item className="pb-0">
          <Typography className={`${classes.title} m-0`}>
            {props.intl.formatMessage({
              ...messages.taxes,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.transferTax} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.transferTaxInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.transferTax}
                name="transferTax"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.acquisitionStampDuty} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.acquisitionStampDutyInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.acquisitionStampDuty}
                name="usefulArea"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.mortgageStampDuty} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.mortgageStampDutyInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.mortgageStampDuty}
                name="mortgageStampDuty"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.interestStampDuty} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.interestStampDutyInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.interestStampDuty}
                name="interestStampDuty"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.landRegistryWithMortgage} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.landRegistryWithMortgageInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.landRegistryWithMortgage}
                name="landRegistryWithMortgage"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.landRegistryWithoutMortgage} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.landRegistryWithoutMortgageInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.landRegistryWithoutMortgage}
                name="landRegistryWithoutMortgage"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.irs} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.irsInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.IRS}
                name="IRS"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.capitalGainsTaxBase} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capitalGainsTaxBaseInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.capitalGainsTaxBase}
                name="capitalGainsTaxBase"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function exitValueCalculationAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item className="pb-0">
          <Typography className={`${classes.title} m-0`}>
            {props.intl.formatMessage({
              ...messages.exitValueCalculation,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.type} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.typeInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.type}
                name="type"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.condition} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.conditionInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.condition}
                name="condition"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.percentile} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.percentileInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.percentile}
                name="percentile"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.cap} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.cap}
                name="cap"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.floor} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.floorInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.floor}
                name="floor"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.hpi} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.hpiInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.hpi}
                name="hpi"
                readOnly
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.timeToSale} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.timeToSaleInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.timeToSell}
                name="timeToSale"
                readOnly
                startAdornment={
                  <InputAdornment position="start">months</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.exitValueOverride} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.exitValueOverrideInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.exitValueOverride}
                name="exitValueOverride"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                <FormattedMessage {...messages.exitBrokerFee} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.exitBrokerFeeInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.criteria.exitBrokerFee}
                name="exitBrokerFee"
                readOnly
                startAdornment={
                  <InputAdornment position="start">&#8364;</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function locationAccordion() {
    return (
      <Grid item container spacing={4} className="mb-10 p-10">
        <Grid item className="pb-0">
          <Typography className={`${classes.title} m-0`}>
            {props.intl.formatMessage({
              ...messages.location,
            })}
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs={3}>
            <FormControl variant="standard" className="w-100">
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.location,
                })}
              </InputLabel>
              <Select
                value="test"
                name="type"
                renderValue={() => props.inputs.location}
                onChange={handleChange}
                readOnly
              >
                {[].map(index => (
                  <MenuItem key={index} value={index}>
                    {index}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  function criteriaAccordion() {
    return (
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        className="mb-10"
      >
        {locationAccordion()}
        {financingAssumptionsAccordion()}
        {areaAccordion()}
        {acquisitionAccordion()}
        {operationAssumptionsAccordion()}
        {taxesAccordion()}
        {exitValueCalculationAccordion()}
      </Grid>
    );
  }
  function renderAccordionGroup() {
    return (
      <Grid container direction="column" className="w-100 pt-30">
        <Grid item className="pt-30">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {props.intl.formatMessage({
                  ...messages.criteria,
                })}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{criteriaAccordion()}</AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    );
  }
  return (
    <div>
      {!props.isGettingAnalysisById ? (
        renderAccordionGroup()
      ) : (
        <Skeleton count={1} height={100} />
      )}
    </div>
  );
};

export default Index;
