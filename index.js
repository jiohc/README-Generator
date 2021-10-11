// packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project title? (Required)',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a detailed description about your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a detailed description about your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a step-by-step description required to install your project. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide a step-by-step description required to install your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions and examples for use.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles. (Required)',
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Please List your collaborators, if any, with links to their GitHub profiles.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license do you want to add to your project (Required)',
            choices: ['MIT', 'APACHE', 'GPL', 'BSD', 'None']
        },
    
]

// second array of questions
const extraQuestions = [
        {
            type: 'confirm',
            name: 'confirmBadges',
            message: 'Would you like to select any badges?',
            default: true
        },
        {
            type: 'input',
            name: 'badges',
            message: 'Please select badges.',
            when: ({ confirmBadges }) => {
                if (confirmBadges) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'If you wrote tests for your application, would you like provide examples on how to run them?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide examples on how to run the tests for your application',
            when: ({ confirmTests }) => {
                if (confirmTests) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like other developers to contribute?',
            default: true
        },
        {
            type: 'input',
            name: 'contributes',
            message: 'Please add guidelines for how other developers can contribute',
            when: ({ confirmContributing }) => {
                if (confirmContributing) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        
]



// function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('Your README file has been created!')
    });
}

    
// function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        // console log inbetween the arrays
        console.log(`
        ===========================================================================================================
        The sections listed above are the minimum for a good README but also consider adding the following sections
        ===========================================================================================================
        `),
        inquirer.prompt(extraQuestions).then(function (data2) {
            const fileName = 'README.md';
            writeToFile(fileName, {...data,...data2})  
        });

    });
}
// Function call to initialize app
init();
