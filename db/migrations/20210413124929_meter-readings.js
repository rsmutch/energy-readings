exports.up = function (knex) {
  return knex.schema.createTable('meter_readings', (meterReadingsTable) => {
    meterReadingsTable.text('meter_reading_id').primary();
    meterReadingsTable.text('account_id').notNullable();
    meternotNullableReadingsTable.itneger('reading').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('meter_readings');
};
