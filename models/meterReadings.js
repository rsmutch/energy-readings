const connection = require('../db/connection');
const fs = require('fs');
const csv = require('fast-csv');
const { validateCsv } = require('../utilities/csvValidation');

exports.addMeterReadings = ({ path }) =>
  new Promise((resolve, reject) => {
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
          if (validRows.successful < 1) {
            reject(output);
          } else {
            return connection
              .insert(validRows.data)
              .into('meter_readings')
              .returning('*')
              .then((readingsData) => {
                output.data = readingsData;
                resolve(output);
              });
          }
        });
      });
  });
