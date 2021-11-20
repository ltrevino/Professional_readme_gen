let getBadge = (license) => {
    if (license === "mit") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    if (license === "apache-2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
  };
 
  module.exports = getBadge;