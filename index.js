const inquirer = require('inquirer');
const fs = require('fs');

// A short list of license options for the user to choose from
const licenseOptions = ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'];

// A list of questions to prompt the user with for information in order to write the readme 
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation guide for your project:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage guide of your project:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter the contribution guidelines for your project:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the test instructions for your project:',
        },
        {
            type: 'list',
            name: 'liscense',
            message: 'Choose a liscense option:',
            choices: licenseOptions,
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your github username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ]);
}

// TODO: Create a function to write README file
// Writes all information provided by the promptUser function into the readme.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md successfully generated!')
    );
}


// TODO: Create a function to initialize app
async function init() {
    try {
        const userData = await promptUser();

        const READMEContent = generateREADME(userData);

        writeToFile('README.md', READMEContent);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Converts the data from the promptUser function into text to later be written into the readme file
function generateREADME(data) {
    const readmeContent = 
`${data.title}

Description:
${data.description}

Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

Installation:
${data.installation}

Usage:
${data.usage}

Contribution:
${data.contribution}

Tests:
${data.test}

License:
This project is licensed under the ${data.license} license.

Questions:
For any questions, please feel free to contact via:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}`;

    return readmeContent;

}

// Function call to initialize app
init();

