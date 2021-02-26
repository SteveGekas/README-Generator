//function that returns a license badge based on which license is passed in

function renderLicenseBadge(data) {
  
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
function renderLicenseSection(data) { }

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
