// const { readDatabase } = require("../utils");
import readDatabase from '../utils';

const fileName = process.argv[2];
console.log(`process.argv: ${process.argv}`);
console.log(`process.env: ${process.env}`);

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(fileName);
      const dataKeys = Object.keys(data).sort();
      response.status(200);
      response.write('This is the list of our students');
      for (const k of dataKeys) {
        const students = data[k];
        const studentsListText = students.join(', ');
        const text = `\nNumber of students in ${k}: ${students.length}, List: ${studentsListText}`;
        response.write(text);
      }
      response.end();
    } catch (error) {
      response.writeHead(500);
      response.end('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const { major } = request.params;
      if (major !== 'CS' && major !== 'SWE') {
        response.writeHead(500);
        response.end('Major parameter must be CS or SWE');
      }

      const data = await readDatabase(fileName);
      return response.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (error) {
      response.writeHead(500);
      return response.end('Cannot load the database');
    }
  }
}

export default StudentsController;
