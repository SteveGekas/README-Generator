//function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  let badge;
  switch (data.license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    case 'Mozilla':
      badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]';
      break;
    case 'IBM':
      badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]';
      break;
    case 'Apache':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
      break;
    case 'BSD 3-Clause':
      badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
      break;
    case 'Eclipse':
      badge = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]';
      break;
    case 'Other':
      badge = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]';
      break;
    case 'None':
      badge = ' ';
      break;
  }
  return badge;
}

//function that returns the license link
function renderLicenseLink(data) {
  let link;
  switch (data.link) {
    case 'MIT':
      link = '(https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla':
      link = '(https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'IBM':
      link = '(https://opensource.org/licenses/IPL-1.0)';
      break;
    case 'Apache':
      link = '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'BSD 3-Clause':
      link = '(https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Eclipse':
      link = '(https://opensource.org/licenses/EPL-1.0)';
      break;
    case 'Other':
      link = '(http://www.wtfpl.net/about/)';
      break;
    case 'None':
      link = '';
      break;
  }
  return link;
}

//function that returns the license section of README
function renderLicenseSection(data) {
  return { renderLicenseBadge }, { renderLicenseLink };

}
//function to render table of contents to README
function renderTOC(data) {
  return `
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Testing](#testing)
  * [License](#license)
  * [Github](#github)
  * [Email](#email)
  * [Links](#links)
  
  `;
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   ${renderLicenseBadge(data)}

  ##Table of Contents
  ${renderTOC(data)}

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.guidelines}

  ## Testing
  ${data.test}

  ## License
  ${renderLicenseSection(data)}

  ## Github
  Look for me on Github: ${data.github}

  ## Email
  For any inquiries, please email me at: ${data.email}

  ##Links
  ${data.links}

`;
}

module.exports = generateMarkdown;
