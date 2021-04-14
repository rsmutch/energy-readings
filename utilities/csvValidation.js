exports.validateCsv = (data) => {
  const dataRows = data.slice(1, data.length);
  // const output = [];
  const validatedRows = dataRows.map((row) => {
    if (row[1] !== '' && /^\d\d\d\d$/.test(row[2])) {
      return {
        meter_reading_id: row[0],
        account_id: row[1],
        reading: row[2]
      };
    }
  });
  return {
    data: validatedRows,
    successful: validatedRows.length,
    failed: validatedRows.length - validatedRows.length
  };
};
