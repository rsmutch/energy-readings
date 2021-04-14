const meterReadingsRouter = require('express').Router();
const {
  getAllMeterReadings,
  deleteAllMeterReadings
} = require('../controllers/meterReadings');

meterReadingsRouter
  .route('/')
  .get(getAllMeterReadings)
  .delete(deleteAllMeterReadings);

module.exports = { meterReadingsRouter };
