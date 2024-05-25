console.log('Welcome to Holberton School, what is your name?');

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  process.stdout.write(`Your name is: ${name}`);
  process.exit();
});
