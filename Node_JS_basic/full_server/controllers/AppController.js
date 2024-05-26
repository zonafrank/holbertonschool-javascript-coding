// const readDatabase = require("../utils");
// import { readDatabase } from "../utils";

class AppController {
  static getHomePage(_, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
