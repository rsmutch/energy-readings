const { postMeterReadings } = require('../controllers/meterReadings');
const multer = require('multer');

const csv = require('fast-csv');

const upload = multer({ dest: './uploads' });

const meterReadingUploads = require('express').Router();

meterReadingUploads.post('', upload.single('file'), postMeterReadings);

// meterReadingUploads.post('/', upload.single('file'), (req, res, next) => {
//   console.log(req.file);

//   console.log(req.body);

//   console.log(req);
// csv.fromPath(req.file.path)
// .on("data", function (data) {
//   fileRows.push(data); // push each row
// })
// .on("end", function () {
//   console.log(fileRows)
//   fs.unlinkSync(req.file.path);   // remove temp file
//   //process "fileRows" and respond
// })
// });

module.exports = meterReadingUploads;
