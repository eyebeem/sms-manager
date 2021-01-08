
const appVersion = require('../../package').version;

// get health of application
exports.getHealth = (req, res) => {
  console.log('In controller - getHealth');

  const response = {
    status: 'UP',
    appVersion: appVersion,
  };

  res.json(response);
};
