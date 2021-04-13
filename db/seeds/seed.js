const { accountsData, meterReadingsData } = require('../data/index.js');
const fs = require('fs');
const seedFile = require('knex-seed-file');
const path = require('path');

exports.seed = (knex, Promise) => {
  return knex('accounts')
    .del()
    .then(() =>
      seedFile(knex, accountsData, 'accounts', {
        columnSeparator: ',',
        rowSeparator: '\r\n',
        ignoreFirstLine: true,
        mapTo: ['account_id', 'first_name', 'surname', 'email']
      }).then((data) => {})
    );
};
