const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the component ?',
    default: 'ComponentName',
  },
  {
    type: 'list',
    name: 'type',
    message: 'What kind of components do you want to create ?',
    choices: ['class', 'hook'],
  },
  {
    type: 'list',
    name: 'jsExtension',
    message: 'What kind of extension do you use for js files ?',
    choices: ['js', 'tsx'],
  },
  {
    type: 'list',
    name: 'cssExtension',
    message: 'What kind of extension do you use for style file ?',
    choices: ['css', 'scss'],
  },
];

module.exports = {
  questions,
};
