const inquirer = require('inquirer');
const fs = require('fs');

const licenseOptions = ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'];

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
            options: licenseOptions,
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

function generateREADME() {

}

// Function call to initialize app
init();

