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

const Criteria = ({ props }) => {
  const classes = useStyles();

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
                defaultValue={props.analysis.criteria.financingRate}
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
                defaultValue={props.analysis.criteria.capexFinanced}
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
                defaultValue={props.analysis.criteria.interestRate}
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
                defaultValue={props.analysis.criteria.amortization}
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
                defaultValue={props.analysis.criteria.bankCommission}
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
                <FormattedMessage {...messages.earlyRepaymentRate} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.earlyRepaymentRateInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.criteria.earlyRepaymentRate}
                name="earlyRepaymentRate"
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
                defaultValue={props.analysis.criteria.grossArea}
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
                defaultValue={props.analysis.criteria.Gpa}
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
                defaultValue={props.analysis.criteria.Capex}
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
                defaultValue={props.analysis.criteria.condominiumCosts}
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
                defaultValue={props.analysis.criteria.propertyTaxRate}
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
                <FormattedMessage {...messages.bidAskRate} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.bidAskRateInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.criteria.bidAskRate}
                name="bidAskRate"
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
                <FormattedMessage {...messages.entryBrokerRate} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.entryBrokerRateInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.criteria.entrBrokerFee}
                name="entryBrokerRate"
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
                defaultValue={props.analysis.criteria.transferTax}
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
                defaultValue={props.analysis.criteria.acquisitionStampDuty}
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
                defaultValue={props.analysis.criteria.mortgageStampDuty}
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
                defaultValue={props.analysis.criteria.interestStampDuty}
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
                <FormattedMessage
                  {...messages.landRegistryInscriptionWithMortgage}
                />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.landRegistryInscriptionWithMortgageInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={
                  props.analysis.criteria.landRegistryInscriptionWithMortgage
                }
                name="landRegistryInscriptionWithMortgage"
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
                <FormattedMessage
                  {...messages.landRegistryInscriptionWithoutMortgage}
                />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.landRegistryInscriptionWithoutMortgageInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={
                  props.analysis.criteria.landRegistryInscriptionWithoutMortgage
                }
                name="landRegistryInscriptionWithoutMortgage"
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
                defaultValue={props.analysis.criteria.IRS}
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
                <FormattedMessage {...messages.capitalGainsTaxRate} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capitalGainsTaxRateInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.criteria.capitalGainsTaxRate}
                name="capitalGainsTaxRate"
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
                defaultValue={props.analysis.criteria.type}
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
                defaultValue={props.analysis.criteria.condition}
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
                defaultValue={props.analysis.criteria.percentile}
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
                <FormattedMessage {...messages.capRate} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.capRateInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.criteria.capRate}
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
                <FormattedMessage {...messages.floorRate} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.floorRateInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.criteria.floorRate}
                name="floorRate"
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
                defaultValue={props.analysis.criteria.hpi}
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
                defaultValue={props.analysis.criteria.timeToSell}
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
                defaultValue={props.analysis.criteria.exitValueOverride}
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
                <FormattedMessage {...messages.exitBrokerRate} />
                <Tooltip
                  title={props.intl.formatMessage({
                    ...messages.exitBrokerRateInfo,
                  })}
                >
                  <IconButton className={classes.iconMr}>
                    <InfoIcon className={classes.iconSize} color="primary" />
                  </IconButton>
                </Tooltip>
              </InputLabel>
              <Input
                type="number"
                defaultValue={props.analysis.criteria.exitBrokerRate}
                name="exitBrokerRate"
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
            {/*  <FormControl variant="standard" className="w-100">
              <InputLabel>
                {props.intl.formatMessage({
                  ...messages.location,
                })}
              </InputLabel>
              <Select
                value="test"
                name="type"
                renderValue={() => props.analyis.property.location}
                onChange={handleChange}
                readOnly
              >
                {[].map(index => (
                  <MenuItem key={index} value={index}>
                    {index}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
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

export default Criteria;
