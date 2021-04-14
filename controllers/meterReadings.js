const { fetchAllMeterReadings } = require('../models/fetchMeterReadings');
const { addMeterReadings } = require('../models/meterReadings');

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
  fetchAllMeterReadings()
    .then((readings) => {
      res.status(200).send({ readings });
    })
    .catch((err) => {
      console.log(err);
    });
};
