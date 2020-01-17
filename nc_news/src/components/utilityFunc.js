const timeFormatter = time => {
  return `${time.substring(0, 10)} at ${time.substring(11, 16)}`;
};

module.exports = timeFormatter;
