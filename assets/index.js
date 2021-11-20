const inquirer = require('inquirer');
const fs = require("fs");
const license = require("./license");
const createReadme = require("./generator");
const badge = require("./badges");



inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Project Name:",
    },
    {
      type: "input",
      name: "repo",
      message:
        "Project Repository",
    },
    {
      type: "input",
      name: "description",
      message: "Descripcion:",
    },
    {
      type: "input",
      name: "prereq",
      message: "Prerequisites:",
    },
    {
      type: "input",
      name: "installation",
      message: "Install instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Instrucciones de uso:",
    },
    {
      type: "input",
      name: "contribution",
      message: "Contributors:",
    },
    {
      type: "input",
      name: "tests",
      message: "Test instructions:",
    },
    {
      type: "input",
      name: "github",
      message: "GitHub user:",
    },
    {
      type: "input",
      name: "email",
      message: "Email:",
    },
    {
      type: "list",
      name: "license",
      message: "Select your license:",
      choices: [
        "mit",
        "unlicense",
        "apache-2.0"
      ],
    },
  ])
    
  
    .then(function (data) {
        console.log(data.license);
    license(data.license)
      .then((response) => {
        
        let description = response.data.description;
        let name = response.data.name;
        let badgeI = badge(data.license);
        let readme = createReadme(
          data,
          name,
          description,
          badgeI
        );
       
        fs.writeFile("README.md", readme, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("OK");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });