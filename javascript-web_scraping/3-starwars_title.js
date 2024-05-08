#!/usr/bin/node
const request = require('request');

try {
  const baseUrl = 'https://swapi-api.hbtn.io/api/films';
  const movieId = process.argv[2];
  const movieUrl = `${baseUrl}/${movieId}`;
  request(movieUrl, (err, res, body) => {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.parse(body).title);
    }
  });
} catch (error) {
  console.error(error);
}
