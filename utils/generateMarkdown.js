// // // TODO: Create a function that returns a license badge based on which license is passed in
// // // If there is no license, return an empty string
function renderLicenseBadge(license) {}

// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }


// const generateContribute = contributeText => {
//   if (!contributeText) {
//     return 'Please contact me if you would like to contribute to this project.'
//   } else {
//     return 'No contributes needed.'
//   }
// }
// const generateTest = testSection => {
//   if (!testSection) {
//     return 'npm run test'
//   } else {
//     return 'No tests available.'
//   }
// }

function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Collaborators](#Collaborators)
  * [License](#license)
  * [Contributes](#contributes)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Collaborators
  ${data.credits}

  ## License 
  This project is licensed under ${data.license}

  ## Tests
  ${data.tests}
  
  ## Contributing 
  ${data.contributes}



  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
};

module.exports = generateMarkdown;
