const fs = require('fs');

module.exports = function() {
  fs.stdin.on('data', data => {
    const cmd = data.toString().trim();

    // make ls do things, lol
    const ls = `${fs.readdir()}`;
    fs.stdout.write(ls);
    fs.stdout.write('\nprompt > ');
  });
};
