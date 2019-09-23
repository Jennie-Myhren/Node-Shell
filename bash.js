process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  //pwd var
  // const pwd = __dirname;
  const pwd = `${process.cwd()}`;
  process.stdout.write(pwd);
  process.stdout.write('\nprompt > ');
});
