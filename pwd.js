
//  process.stdin.on('data', function thisFunc(data) {
//   const cmd = data.toString().trim();
//   //pwd var
//   // const pwd = __dirname;
//   const pwd = `${process.cwd()}`;
//   process.stdout.write(pwd);
//   process.stdout.write('\nprompt > ');
// });
// function  pwdFunc(data) {
//   const cmd = data.toString().trim();
//   //pwd var
//   // const pwd = __dirname;
//   const pwd = `${process.cwd()}`;
//   process.stdout.write(pwd);
//   process.stdout.write('\nprompt > ');
// };

module.exports = function (){
   process.stdin.on('data', (data)=> {
  const cmd = data.toString().trim();
  //pwd var
  // const pwd = __dirname;
  const pwd = `${process.cwd()}`;
  process.stdout.write(pwd);
  process.stdout.write('\nprompt > ');
});
}
