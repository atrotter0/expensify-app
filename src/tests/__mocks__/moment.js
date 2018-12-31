const moment = require.requireActual('moment');

// Mock moment library
export default (timestamp = 0) => {
  return moment(timestamp);
};
