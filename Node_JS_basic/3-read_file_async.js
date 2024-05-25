// const fs = require("fs");
const {
  promises: { readFile },
} = require('fs');

function countStudents(filename) {
  return readFile(filename)
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

      console.log(`Number of students: ${studentCount}`);

      for (const field in result) {
        if (Object.getOwnPropertyNames(result).includes(field)) {
          console.log(
            `Number of students in ${field}: ${
              result[field].count
            }. List: ${result[field].students.join(', ')}`,
          );
        }
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
