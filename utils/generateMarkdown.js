
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-green)

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
