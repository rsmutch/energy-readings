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
