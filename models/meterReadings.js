const connection = require('../db/connection');
const fs = require('fs');
const csv = require('fast-csv');
const { validateCsv } = require('../utilities/csvValidation');

exports.getAllMeterReadings = () => {
  return connection
    .select('meter_reading_id')
    .from('meter_readings')
    .then((readings) => {
      return readings;
    });
};

exports.addMeterReadings = ({ path }) =>
  new Promise((resolve) => {
    let output = {};
    let fileRows = [];
    csv
      .parseFile(path)
      .on('data', (data) => {
        fileRows.push(data);
      })
      .on('end', () => {
        fs.unlinkSync(path);
        return validateCsv(fileRows).then((validRows) => {
          output.report = {
            successful: validRows.successful,
            failed: validRows.failed
          };
          return connection
            .insert(validRows.data)
            .into('meter_readings')
            .returning('*')
            .then((readingsData) => {
              output.data = readingsData;
              resolve(output);
            });
        });
      });
  });
