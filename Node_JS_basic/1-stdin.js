process.stdin.write('Welcome to Holberton School, what is your name?\n');

process.on('exit', () => {
  process.stdin.write('This important software is now closing\n');
});

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdin.write(`Your name is: ${name}\n`);
  process.exit();
});
