const { getAllAccounts } = require('../models/accounts');

exports.validateCsv = (data) => {
  return getAllAccounts()
    .then((accounts) => {
      return accounts;
    })
    .then((accounts) => {
      const dataRows = data.slice(1, data.length);
      const validRows = [];
      dataRows.forEach((row) => {
        if (row[1] === '') {
          // console.log('No account_id provided');
        } else if (!accounts.some((acc) => acc.account_id === row[1])) {
          // console.log('Invalid account_id');
          // console.log(row[1]);
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
