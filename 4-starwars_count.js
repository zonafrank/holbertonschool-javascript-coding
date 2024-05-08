#!/usr/bin/node
const request = require('request');

try {
  const url = process.argv[2];
  request(url, (err, res, body) => {
    if (err) {
      console.error(err);
    } else {
      const data = JSON.parse(body).results;
      let count = 0;
      const characterId = 18;
      for (const item of data) {
        const { characters } = item;
        for (const character of characters) {
          if (character.includes(`/${characterId}/`)) {
            count += 1;
          }
        }
      }

      console.log(count);
    }
  });
} catch (error) {
  console.error(error);
}
