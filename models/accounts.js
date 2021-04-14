const connection = require('../db/connection');

exports.fetchAllAccounts = () => {
  return connection
    .select('account_id')
    .from('accounts')
    .then((accounts) => {
      return accounts;
    });
};
