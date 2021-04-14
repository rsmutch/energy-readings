const express = require('express');
const { meterReadingsRouter } = require('./routes/meterReadings');
const meterReadingUploads = require('./routes/meterReadingUploads');

const app = express();

app.use(express.json());

app.use('/meter-readings-uploads', meterReadingUploads);

app.use('/meter-readings', meterReadingsRouter);

module.exports = app;
