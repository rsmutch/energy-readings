const { postMeterReadings } = require('../controllers/meterReadings');
const multer = require('multer');
const meterReadingUploads = require('express').Router();

const csv = require('fast-csv');

const upload = multer({ dest: './uploads' });

meterReadingUploads.post('', upload.single('file'), postMeterReadings);

module.exports = meterReadingUploads;
