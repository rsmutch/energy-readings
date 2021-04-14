const { fetchAllMeterReadings } = require('../models/fetchMeterReadings');
const {
  addMeterReadings,
  removeMeterReadingsById
} = require('../models/meterReadings');

exports.postMeterReadings = (req, res, next) => {
  addMeterReadings(req.file)
    .then((readings) => {
      res.status(201).send({ readings });
    })
    .catch((err) => {
      res.status(409).send(err.report);
    });
};

exports.getAllMeterReadings = (req, res, next) => {
  fetchAllMeterReadings(true)
    .then((readings) => {
      res.status(200).send({ readings });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteMeterReadingsById = (req, res, next) => {
  const { meter_reading_id } = req.params;
  removeMeterReadingsById(meter_reading_id)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      console.log(err);
    });
};
