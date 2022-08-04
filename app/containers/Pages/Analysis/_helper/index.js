function createAcuisitionDepTableData(
  name,
  year1,
  year2,
  year3,
  year5,
  year10,
) {
  return { name, year1, year2, year3, year5, year10 };
}

function createData(name, value) {
  return { name, value };
}

export const investmentKpiRows = [
  createData('Asking Price', '€ 20.1k   €/sqm'),
  createData('Acquisition Price', '€ 10.1k   €/sqm'),
  createData('Selling Price', '€ 32.1k   €/sqm'),
  createData('Time To Scale', '11 months'),
];

export const capitalRows = [
  createData('Entry Capital', '€ 25, 000'),
  createData('Required Capital Over Period', '€ 102, 450'),
  createData('Total Required Capital Over Period', '€ 200, 630'),
];

export const acuisitionRows = [
  createAcuisitionDepTableData(
    'Asking',
    '€ 9,400',
    '€ 9,400',
    '€ 9,400',
    '€ 9,400',
    '€ 9,400',
  ),
  createAcuisitionDepTableData(
    'Acquisition Price',
    '€ 8,400',
    '€ 8,400',
    '€ 8,400',
    '€ 8,400',
    '€ 8,400',
  ),
  createAcuisitionDepTableData(
    'Acquisition Broker Fee',
    '€ 7,400',
    '€ 7,400',
    '€ 7,400',
    '€ 7,400',
    '€ 7,400',
  ),
  createAcuisitionDepTableData(
    'RETT',
    '€ 6,400',
    '€ 6,400',
    '€ 6,400',
    '€ 6,400',
    '€ 6,400',
  ),
  createAcuisitionDepTableData(
    'Acquisition Stamp Duty',
    '€ 5,400',
    '€ 5,400',
    '€ 5,400',
    '€ 5,400',
    '€ 5,400',
  ),
  createAcuisitionDepTableData(
    'Notary',
    '€ 4,400',
    '€ 4,400',
    '€ 4,400',
    '€ 4,400',
    '€ 4,400',
  ),
  createAcuisitionDepTableData(
    'Mortgage Stamp Duty',
    '€ 3,400',
    '€ 3,400',
    '€ 3,400',
    '€ 3,400',
    '€ 3,400',
  ),
  createAcuisitionDepTableData(
    'Bank Costs',
    '€ 2,400',
    '€ 2,400',
    '€ 2,400',
    '€ 2,400',
    '€ 2,400',
  ),
  createAcuisitionDepTableData(
    'Total Acquistion Price',
    '€1,400',
    '€1,400',
    '€1,400',
    '€1,400',
    '€1,400',
  ),
  createAcuisitionDepTableData(
    'Total',
    '€ 32,400',
    '€ 32,400',
    '€ 32,400',
    '€ 32,400',
    '€ 32,400',
  ),
];
export const depRows = [
  createAcuisitionDepTableData(
    'BoP Debt',
    '€ 9,400',
    '€ 9,400',
    '€ 9,400',
    '€ 9,400',
    '€ 9,400',
  ),
  createAcuisitionDepTableData(
    'Acquisition Price',
    '€ 8,400',
    '€ 8,400',
    '€ 8,400',
    '€ 8,400',
    '€ 8,400',
  ),
  createAcuisitionDepTableData(
    'Capex Debt',
    '€ 7,400',
    '€ 7,400',
    '€ 7,400',
    '€ 7,400',
    '€ 7,400',
  ),
  createAcuisitionDepTableData(
    'Amortization',
    '€ 6,400',
    '€ 6,400',
    '€ 6,400',
    '€ 6,400',
    '€ 6,400',
  ),
  createAcuisitionDepTableData(
    'Interests',
    '€ 5,400',
    '€ 5,400',
    '€ 5,400',
    '€ 5,400',
    '€ 5,400',
  ),
  createAcuisitionDepTableData(
    'Total',
    '€ 32,400',
    '€ 32,400',
    '€ 32,400',
    '€ 32,400',
    '€ 32,400',
  ),
];
