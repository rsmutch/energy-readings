const connection = require('../db/connection');
const fs = require('fs');
const csv = require('fast-csv');

exports.addMeterReadings = ({ path }) => {
  let fileRows = [];
  csv
    .parseFile(path)
    .on('data', (data) => {
      fileRows.push(data); // push each row
    })
    .on('end', () => {
      console.log(fileRows);
      fs.unlinkSync(path); // remove temp file
      //process "fileRows" and respond
      console.log('removed');
    });
};
