const express = require('express');
const {
  promises: { readFile },
} = require('fs');

const app = express();

const fileName = process.argv[2];

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  res.write('This is the list of our students');

  readFile(fileName)
    .then((fileBuffer) => {
      const fileData = fileBuffer.toString();
      const lines = fileData.split('\n').slice(1);
      const result = {};
      let studentCount = 0;

      for (const line of lines) {
        if (line.length !== 0) {
          studentCount += 1;
          const tokens = line.split(',');
          const firstName = tokens[0];
          const subject = tokens[3];

          if (!(subject in result)) {
            result[subject] = { count: 1, students: [firstName] };
          } else {
            result[subject].count += 1;
            result[subject].students.push(firstName);
          }
        }
      }

      let text = `\nNumber of students: ${studentCount}`;

      for (const field in result) {
        if (Object.getOwnPropertyNames(result).includes(field)) {
          text += `\nNumber of students in ${field}: ${
            result[field].count
          }. List: ${result[field].students.join(', ')}`;
        }
      }
      res.end(text);
    })
    .catch(() => {
      res.end('\nCannot load the database');
    });
});

app.listen(1245);

module.exports = app;
