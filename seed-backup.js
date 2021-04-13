const { accountsData, meterReadingsData } = require('../data/index.js');
const fs = require('fs');
const csv = require('fast-csv');

exports.seed = (connection) => {
  console.log('hello');
  const arr = [];
  return fs
    .createReadStream(accountsData)
    .on('open', () => {
      console.log('open');
    })
    .pipe(csv.parse({ headers: true }))
    .on('error', (error) => console.error(error))
    .on('data', (row) => {
      arr.push(row);
    })
    .on('end', (rowCount) => {
      console.log('inside the end');
      connection.migrate
        .rollback()
        .then(() => {
          return connection.migrate.latest();
        })
        .then(() => {
          return connection.insert(arr).into('accounts').returning('*');
        })
        .then((data) => {
          console.log(`inserted ${data.length} accounts`);
        });
    });
};

// let readingsReadStream = fs.createReadStream(meterReadingsData);
