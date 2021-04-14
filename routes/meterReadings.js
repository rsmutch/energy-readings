const meterReadingsRouter = require('express').Router();
const { getAllMeterReadings } = require('../controllers/meterReadings');

meterReadingsRouter.route('/').get(getAllMeterReadings);

module.exports = { meterReadingsRouter };
