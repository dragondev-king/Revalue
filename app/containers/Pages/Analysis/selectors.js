import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAnalysisDomain = state => state.analysis || initialState;

const makeSelectAnalysis = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.analysis,
  );

const makeSelectInputs = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.inputs,
  );

const makeSelectLocations = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.locations,
  );

const makeSelectLocation = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.location,
  );

const makeSelectTypes = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.types,
  );

const makeSelectType = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.type,
  );

const makeSelectTypologies = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.typologies,
  );

const makeSelectTypology = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.typology,
  );

const makeSelectConditions = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.conditions,
  );

const makeSelectCondition = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.condition,
  );

const makeSelectMinPrice = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.minprice,
  );

const makeSelectMaxPrice = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.maxprice,
  );

const makeSelectMinArea = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.minarea,
  );

const makeSelectMaxArea = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.maxarea,
  );

const makeSelectMinCapital = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.mincapital,
  );

const makeSelectMaxCapital = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.maxcapital,
  );

const makeSelectBidAsk = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.bidask,
  );

const makeSelectFinancingRate = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.financingrate,
  );

// Other Investment Information
// Acquisition Assumptions
const makeSelectAcquisitionTypes = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.acquisitiontypes,
  );
const makeSelectAcquisitionType = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.acquisitiontype,
  );
const makeSelectEntryFee = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.entryfee,
  );
const makeSelectStampDuty = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.stampduty,
  );
const makeSelectLRwithM = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.lrwithm,
  );
const makeSelectLRwithoutM = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.lrwithoutm,
  );
// Finance Assumptions
const makeSelectInterestRate = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.interestrate,
  );
const makeSelectBankCommission = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.bankcommission,
  );
const makeSelectAmortization = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.amortization,
  );
const makeSelectStampDutyMortgage = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.stampdutymortgage,
  );
const makeSelectStampDutyInterests = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.stampdutyinterests,
  );
// Operating Assumptions
const makeSelectCondominiumCosts = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.condominiumcosts,
  );
const makeSelectPropertyTaxRate = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.propertytaxrate,
  );
// Exit Assumptions
const makeSelectTimetoSale = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.timetosale,
  );
const makeSelectIRSRate = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.irsrate,
  );
const makeSelectExitBrokerFee = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.exitbrokerfee,
  );
const makeSelectLoanEarlyRepaymentFee = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.loanearlyrepaymentfee,
  );
const makeSelectCapitalgainsTaxBase = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.capitalgainstaxbase,
  );
// Valuation Model Configuration
const makeSelectGCPA = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.gcpa,
  );
const makeSelectFloor = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.floor,
  );
const makeSelectCap = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.cap,
  );
const makeSelectCIPs = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.cips,
  );
const makeSelectCIP = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.cip,
  );
const makeSelectMOP = () =>
  createSelector(
    selectAnalysisDomain,
    substate => substate.mop,
  );

export {
  makeSelectAnalysis,
  makeSelectLocations,
  makeSelectLocation,
  makeSelectTypes,
  makeSelectType,
  makeSelectTypologies,
  makeSelectTypology,
  makeSelectConditions,
  makeSelectCondition,
  makeSelectMinPrice,
  makeSelectMaxPrice,
  makeSelectMinArea,
  makeSelectMaxArea,
  makeSelectMinCapital,
  makeSelectMaxCapital,
  makeSelectBidAsk,
  makeSelectFinancingRate,
  makeSelectGCPA,
  makeSelectFloor,
  makeSelectCap,
  makeSelectCIPs,
  makeSelectCIP,
  makeSelectMOP,
  makeSelectAcquisitionTypes,
  makeSelectAcquisitionType,
  makeSelectEntryFee,
  makeSelectStampDuty,
  makeSelectLRwithM,
  makeSelectLRwithoutM,
  makeSelectInterestRate,
  makeSelectBankCommission,
  makeSelectAmortization,
  makeSelectStampDutyMortgage,
  makeSelectStampDutyInterests,
  makeSelectCondominiumCosts,
  makeSelectPropertyTaxRate,
  makeSelectTimetoSale,
  makeSelectIRSRate,
  makeSelectExitBrokerFee,
  makeSelectLoanEarlyRepaymentFee,
  makeSelectCapitalgainsTaxBase,
  makeSelectInputs,
};
