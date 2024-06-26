import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(process.argv[2]);
      const dataKeys = Object.keys(data).sort();
      let responseText = 'This is the list of our students';
      for (const k of dataKeys) {
        const students = data[k];
        const studentsListText = students.join(', ');
        responseText += `\nNumber of students in ${k}: ${students.length}. List: ${studentsListText}`;
      }
      response.status(200).send(responseText);
    } catch (error) {
      response.status(500).end('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const { major } = request.params;
      if (major !== 'CS' && major !== 'SWE') {
        return response.status(500).end('Major parameter must be CS or SWE');
      }

      const data = await readDatabase(process.argv[2]);
      return response.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (error) {
      return response.status(500).end('Cannot load the database');
    }
  }
}

export default StudentsController;
