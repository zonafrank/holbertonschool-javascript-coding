#!/usr/bin/node
const request = require('request');

try {
  const url = process.argv[2];
  request(url, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`code: ${res.statusCode}`);
    }
  });
} catch (error) {
  console.error(error);
}
