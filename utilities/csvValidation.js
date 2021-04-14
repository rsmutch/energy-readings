const { fetchAllAccounts } = require('../models/accounts');
const { fetchAllMeterReadings } = require('../models/fetchMeterReadings');

exports.validateCsv = (data) => {
  const accounts = fetchAllAccounts();
  const readings = fetchAllMeterReadings();
  fetchAllMeterReadings;
  return Promise.all([accounts, readings]).then(([accounts, readings]) => {
    const dataRows = data.slice(1, data.length);
    const validRows = [];
    dataRows.forEach((row) => {
      if (row[1] === '') {
        // console.log('No account_id provided');
      } else if (!accounts.some((acc) => acc.account_id === row[1])) {
        // console.log('Invalid account_id');
        // console.log(row[1]);
      } else if (
        readings.some((reading) => reading.meter_reading_id === row[0])
      ) {
        // console.log('meter_reading_id duplicate');
        // console.log(row[0]);
      } else if (/^\d\d\d\d$/.test(row[2])) {
        // console.log('Correct entry!');
        validRows.push({
          meter_reading_id: row[0],
          account_id: row[1],
          reading: row[2]
        });
      }
    });
    return {
      data: validRows,
      successful: validRows.length,
      failed: dataRows.length - validRows.length
    };
  });
};
