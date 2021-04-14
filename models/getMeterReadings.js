const connection = require('../db/connection');

exports.getAllMeterReadings = () => {
  return connection
    .select('meter_reading_id')
    .from('meter_readings')
    .then((readings) => {
      return readings;
    });
};
