process.stdout.write('prompt > ');
const currentDirectory = require('./pwd');
// console.log (currentDirectory);
currentDirectory();

const allMyFiles = require('./ls');
allMyFiles();
