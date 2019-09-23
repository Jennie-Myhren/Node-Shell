const fs = require('fs');

module.exports = function() {
  process.stdin.on(
    'files',
    fs.readdir('./', 'utf8', (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join('\n'));
        process.stdout.write('prompt > ');
      }
    })
  );
  // fs.stdin.on('data', data => {
  //   const cmd = data.toString().trim();

  //   // make ls do things, lol
  //   const ls = `${fs.readdir()}`;
  //   fs.stdout.write(ls);
  //   fs.stdout.write('\nprompt > ');
  // });
};
