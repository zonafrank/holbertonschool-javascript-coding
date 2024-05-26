import readDatabase from '../utils';

// const filename = './database.csv';
const filename = process.argv[2];

export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(filename)
      .then((studentsData) => {
        // console.log(studentsData);

        response.write('This is the list of our students\n');
        response.write(
          `Number of students in CS: ${
            studentsData.CS.length
          }. List: ${studentsData.CS.join(', ')}\n`,
        );
        response.end(
          `Number of students in SWE: ${
            studentsData.SWE.length
          }. List: ${studentsData.SWE.join(', ')}`,
        );
      })
      .catch(() => {
        response.writeHead(500);
        response.end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    readDatabase(filename)
      .then((studentsData) => {
        // console.log(studentsData);
        // console.log(this._major);

        const { major } = request.params;

        switch (major) {
          case 'CS':
            response.write('This is the list of our students\n');
            response.write(
              `Number of students in CS: ${
                studentsData.CS.length
              }. List: ${studentsData.CS.join(', ')}\n`,
            );
            break;
          case 'SWE':
            response.write('This is the list of our students\n');
            response.end(
              `Number of students in SWE: ${
                studentsData.SWE.length
              }. List: ${studentsData.SWE.join(', ')}`,
            );
            break;
          default:
            response.writeHead(500);
            response.end('Major parameter must be CS or SWE');
        }
      })
      .catch(() => {
        response.writeHead(500);
        response.end('Cannot load the database');
      });
  }
}
