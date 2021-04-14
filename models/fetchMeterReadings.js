const connection = require('../db/connection');

exports.fetchAllMeterReadings = () => {
  return connection
    .select('meter_reading_id')
    .from('meter_readings')
    .then((readings) => {
      return readings;
    });
};
