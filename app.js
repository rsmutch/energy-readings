const express = require('express');
const meterReadingUploads = require('./routes/meterReadingUploads');

const app = express();

app.use(express.json());

app.use('/meter-reading-uploads', meterReadingUploads);

module.exports = app;
