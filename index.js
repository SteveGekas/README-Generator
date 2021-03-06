const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');


const questions = 
  [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your repository?',
      validate: function (response) {
        if (response.length > 1) {
          return true;
        } else {
          return console.log( 'Please add a title for your repository.');
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your application.',
      validate: function (response) {
        if (response.length > 1) {
          return true;
        } else {
          return console.log( 'Please add a description of your application.');
        }
      }
    },
    {
      type: 'input',
      name: 'install',
      message: 'What are the instructions for installation?',
      validate: function (response) {
        if (response.length > 1) {
          return true;
        } else {
          return console.log( 'Please add installation instructions.');
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What information is there for the usage of your application?',
      validate: function (response) {
        if (response.length > 1) {
          return true;
        } else {
          return console.log( 'Please add information for usage.');
        }
      }
    },
    {
      type: 'input',
      name: 'guidelines',
      message: 'What are the contribution guidelines?',
      validate: function (response) {
        if (response.length > 1) {
          return true;
        } else {
          return console.log( 'Please add contribution guidelines.');
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the instructions for testing this application?',
      validate: function (response) {
        if (response.length > 1) {
          return true;
        } else {
          return console.log( 'Please add testing instructions.');
        }
      }
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Please choose a license for this application.',
      choices: ['MIT', 'Mozilla', 'IBM', 'Apache', 'BSD 3-Clause', 'Eclipse', 'Other', 'None'],
      validate: function (response) {
        if (response.checked = true) {
          return true;
          console.log(response.value)
        } else {
          return console.log( 'Please choose a license.');
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?',
      validate: function (response) {
        if (response.length > 1) {
          return true;
        } else {
          return console.log( 'Please add your Github username.');
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: function (response) {
        if (response.includes("@")===true) {
          return true;
        } else {
          return console.log( 'Please add your email.');
        }
      }
    },
    {
      type: 'input',
      name: 'links',
      message: 'What links will you be using for your appliction?',
      validate: function (response) {
        if (response.length > 1) {
          return true;
        } else {
          return console.log( 'Please add links to your application.');
        }
      }
    },
  ];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to write README file
function init() {
  inquirer.prompt(questions)
    .then((responses) => {
      try {
        writeToFile('README.md', generateMarkdown({ ...responses }));
        console.log('You have completed you README.md!');

      }catch (error) {
        console.log(error)
      }
    });
}


// Function call to initialize app
init();
