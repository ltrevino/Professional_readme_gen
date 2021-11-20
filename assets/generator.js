// A string of markdown for the README
const createReadme = (index, name, description, badge) => {
    return `
  # ${index.title} 
  ${badge}
  - Check out the GitHub [repository](${index.repo})
  ## Table of Contents
  - [About the Project](${index.repo}#about-the-project)
    - [Usage](${index.repo}#usage)
  * [Instructions](${index.repo}#start-your-own)
    - [Prerequisites](${index.repo}#prerequisites)
    - [Installation](${index.repo}#installation)
  - [Test Instructions](${index.repo}#test-instructions)
  - [License](${index.repo}#license)
  - [Contributions](${index.repo}#contributions)
  - [My Contact Information](${index.repo}#my-contact-information)
  ## About the Project
  ${index.description}
  ### Usage
  ${index.usage}
  ## Instructions
  ### Prerequisites
  ${index.prereq}
  Clone the GitHub repository: ${index.repo}.git
  ### Installation
  ${index.installation}
  ### Test Instructions
  ${index.tests}
  ## License
  ### ${name}
  ${description}
  ## Contribute
  ${index.contribution}
  ## My Contact Information
  Email: ${index.email}
  GitHub Page: [${index.github}](https://github.com/${index.github})
  `;
  };
  

  module.exports = createReadme;