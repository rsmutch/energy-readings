exports.up = function (knex) {
  return knex.schema.createTable('accounts', (accountsTable) => {
    accountsTable.text('account_id').primary();
    accountsTable.text('first_name').notNullable();
    accountsTable.text('surname').notNullable();
    accountsTable.text('email').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('accounts');
};
