const http = require('http');
const url = require('url');
const {
  promises: { readFile },
} = require('fs');

const fileName = process.argv[2];

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (reqUrl === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (reqUrl === '/students') {
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
  }
});

app.listen(1245);

module.exports = app;
