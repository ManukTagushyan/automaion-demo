// import fs, { lstatSync, readdirSync } from 'fs-extra'
// import { join } from 'path'
const fs = require('fs');
const path = require('path');
const Logger = require('./logger');

/**
 *
 * @param {string} destination - path where create folder
 * @returns {boolean}
 */
function generateFolder(destination) {
  if (fs.existsSync(destination)) {
    return false;
  }
  fs.mkdirSync(destination);
  return true;
}

/**
 * Generate component files
 *
 * @param {object} params object with:
 * @param {string} type: the type of component template
 * @param {string} name: the name of the component used to create folder and file
 * @param {string} destination: where the component folder is created
 * @param {string} cssExtension: the extension of the css file
 * @param {string} jsExtension: the extension of the component file
 */
function generateComponentFiles({
  type,
  name,
  destination,
  cssExtension,
  jsExtension,
}) {
  const buffer = fs.readFileSync(path.join(__dirname, `template/${type}/index.${jsExtension}`));
  const fileContent = buffer
    .toString()
    .replace(/ComponentName/gim, name)
    .replace(/style.css/gim, `style.${cssExtension}`);
  fs.writeFileSync(`${destination}/index.${jsExtension}`, fileContent);
  fs.writeFileSync(`${destination}/style.${cssExtension}`, '');
}


/**
 * Generate component files
 *
 * @param {object} params object with:
 * @param {string} type: the type of component template
 * @param {string} name: the name of the component used to create folder and file
 * @param {string} cwd: where the component folder is created
 * @param {string} cssExtension: the extension of the css file
 * @param {string} jsExtension: the extension of the component file
 */
function generateFiles({
  type,
  name,
  cwd,
  cssExtension,
  jsExtension,
}) {
  try {
    const destination = `${cwd}/${name}`;

    const isFolderCreated = generateFolder(destination);

    if (isFolderCreated) {
      generateComponentFiles({
        type,
        destination,
        name,
        jsExtension,
        cssExtension,
      });
    }
  } catch (err) {
    Logger.error(err.message);
  }
}

module.exports = {
  generateFiles,
};
