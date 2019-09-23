process.stdout.write('prompt > ');

const currentDirectory = require('./pwd');
currentDirectory();

const allMyFiles = require('./ls');
allMyFiles();
