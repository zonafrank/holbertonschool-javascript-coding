console.log('Welcome to Holberton School, what is your name?');

process.stdout.on('readable', (done) => {
  const name = process.stdin.read();
  process.stdout.write(`Your name is: ${name}`);
  process.stdout.write('This important software is now closing\n');
  done();
  process.exit();
});
