console.log('Welcome to Holberton School, what is your name?');

process.on('exit', () => {
  console.log('This important software is now closing');
});

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}\n\n`);
  process.exit();
});
