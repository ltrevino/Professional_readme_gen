const axios = require("axios");

const licenseInfo = (license) => {
  return axios.get("https://api.github.com/licenses/" + license);
};

module.exports = licenseInfo;