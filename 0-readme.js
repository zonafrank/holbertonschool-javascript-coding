#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];

try {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
} catch (error) {
  console.error(error);
}
