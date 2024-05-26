const {
  promises: { readFile }
} = require("fs");

// import { readFile } from "node:fs/promises";

async function readDatabase(filePath) {
  return new Promise((resolve, reject) =>
    readFile(filePath)
      .then((fileBuffer) => {
        const fileData = fileBuffer.toString();
        const lines = fileData.split("\n").slice(1);
        const result = {};

        for (const line of lines) {
          if (line.length !== 0) {
            const tokens = line.split(",");
            const firstName = tokens[0];
            const subject = tokens[3];

            if (!(subject in result)) {
              result[subject] = [firstName];
            } else {
              result[subject].push(firstName);
            }
          }
        }

        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
  );
}

export default readDatabase;
