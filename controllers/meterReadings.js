const { addMeterReadings } = require('../models/meterReadings');

exports.postMeterReadings = (req, res, next) => {
  const { path } = req.file;
  addMeterReadings(path)
    .then((readings) => {
      res.status(201).send({ readings });
    })
    .catch((err) => {
      next(err);
    });
};
