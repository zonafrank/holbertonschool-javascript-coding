console.log('Welcome to Holberton School, what is your name?');

process.on('exit', () => {
  console.log('This important software is now closing');
});

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdin.write(`Your name is: ${name}`);
  process.exit();
});
