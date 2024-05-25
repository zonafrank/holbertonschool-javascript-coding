console.log('Welcome to Holberton School, what is your name?');

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});

process.stdout.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}`);
  process.exit();
});
