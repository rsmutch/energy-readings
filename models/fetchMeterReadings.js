const connection = require('../db/connection');

exports.fetchAllMeterReadings = (allFields) => {
  return connection
    .select('*')
    .from('meter_readings')
    .then((readings) => {
      // console.log(readings);
      return readings;
    });
};
