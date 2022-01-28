#! /usr/bin/env node

console.log('Launching...');

// CLI is using Inquirer which is a package that is used to make interactive CLI interfaces. 
// It has 9 different CLI interfaces:
// checkbox, confirm, editor, expand, input, list, number, password, rawlist

const inquirer = require('inquirer');
const shell = require('shelljs');
const path = process.cwd();
const chalk = require('chalk');

// inquirer
//   .prompt([
//     // Pass prompt questions here
//     ])
//   .then((answers) => {
//     // Use the feedback to drive the CLI
//   });

// In Enterprise I've used this to select different options to drive parameters to an engine
// Example Below 

// inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'framework',
//       message: 'Choose the JS framework which you are using:',
//       choices: ['React', 'NextJS', 'Angular', 'Svelte', 'VueJS'],
//     },
//   ])
//   .then((answers) => {});
//   console.log(answers);
// Do action > 

// Questions can also be stored in utils/questions.js instead of referenced directly into the index
const { questions, questionsTs } = require('./utils/questions.js');
// Links can also be stored in utils/links.js instead of referenced directly into the index
const links = require('./utils/links.js');

inquirer.prompt(questions).then((answers) => {
  if (answers.framework === 'React') {
    inquirer.prompt(questionsTs).then((answersTs) => {
      if (answersTs.typescript === 'Yes') {
        shell.exec(`mkdir ${answers.projectName}`);
        console.log(chalk.green('📁 Created a folder for the project'));
        shell.exec(`git clone ${links.get('React-TS')} ${answers.projectName}`);
        console.log(
          chalk.green(`Cloned started files into ${answers.projectName}`)
        );
        shell.cd(`${path}/${answers.projectName}`);
        shell.exec(`npm i`);
        console.log(
          chalk.green(
            'Successfully installed all the required dependencies.\nCOMPLETE'
          )
        );
      } else {
        shell.exec(`mkdir ${answers.projectName}`);
        console.log(chalk.green('📁 Created a folder for the project'));
        shell.exec(`git clone ${links.get('React')} ${answers.projectName}`);
        console.log(
          chalk.green(`Cloned started files into ${answers.projectName}`)
        );
        shell.cd(`${path}/${answers.projectName}`);
        shell.exec(`npm i`);
        console.log(
          chalk.green(
            'Successfully installed all the required dependencies.\nCOMPLETE'
          )
        );
      }
    });
  } else if (answers.framework === 'NextJS') {
    inquirer.prompt(questionsTs).then((answersTs) => {
      if (answersTs.typescript === 'Yes') {
        shell.exec(`mkdir ${answers.projectName}`);
        console.log(chalk.green('📁 Created a folder for the project'));
        shell.exec(
          `git clone ${links.get('NextJS-TS')} ${answers.projectName}`
        );
        console.log(
          chalk.green(`Cloned started files into ${answers.projectName}`)
        );
        shell.cd(`${path}/${answers.projectName}`);
        shell.exec(`npm i`);
        console.log(
          chalk.green(
            'Successfully installed all the required dependencies.\nCOMPLETE'
          )
        );
      } else {
        shell.exec(`mkdir ${answers.projectName}`);
        console.log(chalk.green('📁 Created a folder for the project'));
        shell.exec(`git clone ${links.get('NextJS')} ${answers.projectName}`);
        console.log(
          chalk.green(`Cloned started files into ${answers.projectName}`)
        );
        shell.cd(`${path}/${answers.projectName}`);
        shell.exec(`npm i`);
        console.log(
          chalk.green(
            'Successfully installed all the required dependencies.\nCOMPLETE'
          )
        );
      }
    });
  } else if (answers.framework === 'Svelte') {
    shell.exec(`mkdir ${answers.projectName}`);
    console.log(chalk.green('📁 Created a folder for the project'));
    shell.exec(`git clone ${links.get('Svelte')} ${answers.projectName}`);
    console.log(
      chalk.green(`🖨️  Cloned started files into ${answers.projectName}`)
    );
    shell.cd(`${path}/${answers.projectName}`);
    shell.exec(`npm i`);
    console.log(
      chalk.green(
        'Successfully installed all the required dependencies.\nCOMPLETE'
      )
    );
  } else {
    shell.exec(`mkdir ${answers.projectName}`);
    console.log(chalk.green('📁 Created a folder for the project'));
    shell.exec(`git clone ${links.get('Vue')} ${answers.projectName}`);
    console.log(
      chalk.green(`🖨️  Cloned started files into ${answers.projectName}`)
    );
    shell.cd(`${path}/${answers.projectName}`);
    shell.exec(`npm i`);
    console.log(
      chalk.green(
        'Successfully installed all the required dependencies.\nCOMPLETE'
      )
    );
  }
});