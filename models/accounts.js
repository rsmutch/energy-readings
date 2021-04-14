const connection = require('../db/connection');

exports.getAllAccounts = () => {
  return connection
    .select('account_id')
    .from('accounts')
    .then((accounts) => {
      return accounts;
    });
};
