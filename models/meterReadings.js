const connection = require('../db/connection');
const fs = require('fs');
const csv = require('fast-csv');
const { validateCsv } = require('../utilities/csvValidation');

exports.addMeterReadings = ({ path }) => {
  let successfulEntries = 0;
  let fileRows = [];
  csv
    .parseFile(path)
    .on('data', (data) => {
      fileRows.push(data);
    })
    .on('end', () => {
      fs.unlinkSync(path);
      const validRows = validateCsv(fileRows);
      console.log(validRows);
      // const { data, successful, failed } = validRows;
      //   return connection
      //     .insert({
      //       meter_reading_id,
      //       account_id,
      //       reading
      //     })
      //     .into('meter_readings')
      //     .returning('*')
      //     .then((readingsData) => {
      //       successfulEntries++;
      //     });
      // });
      // data.forEach((meterReading) => {
      //   const [meter_reading_id, account_id, reading] = meterReading;
      //   return connection
      //     .insert({
      //       meter_reading_id,
      //       account_id,
      //       reading
      //     })
      //     .into('meter_readings')
      //     .returning('*')
      //     .then((readingsData) => {
      //       successfulEntries++;
      //     });
      // });
    });
};
