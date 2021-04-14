const meterReadingsRouter = require('express').Router();
const {
  getAllMeterReadings,
  deleteMeterReadingsById
} = require('../controllers/meterReadings');

meterReadingsRouter.route('/').get(getAllMeterReadings);

meterReadingsRouter.route('/:meter_reading_id').delete(deleteMeterReadingsById);

module.exports = { meterReadingsRouter };
