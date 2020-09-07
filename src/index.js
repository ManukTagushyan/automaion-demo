#!/usr/bin/env node
const Logger = require('./logger');
const { generateFiles } = require('./files');
const { questions } = require('./questions');
const inquirer = require('inquirer');


(async function start() {
  try {
    const requirements = await inquirer.prompt(questions);

    await generateFiles({
      ...requirements,
      cwd: process.cwd(),
    });

    Logger.log('Component created!');
  } catch (e) {
    Logger.error(e.message);
  }
  return null;
}());
