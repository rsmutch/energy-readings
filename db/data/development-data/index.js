const path = require('path');

const accountsData = path.resolve(
  './db/data/development-data/test_accounts.csv'
);

const meterReadingsData = path.resolve(
  './db/data/development-data/meter_reading.csv'
);

module.exports = { accountsData, meterReadingsData };
