#!/usr/bin/node
const request = require('request');

try {
  const todosUrl = process.argv[2];
  request(todosUrl, (err, res, body) => {
    if (err) {
      console.error(err);
    } else {
      const res = {};
      const todos = JSON.parse(body);
      for (const todo of todos) {
        const { userId } = todo;
        const { completed } = todo;
        if (completed) {
          if (userId in res) {
            res[userId] += 1;
          } else {
            res[userId] = 1;
          }
        }
      }

      console.log(res);
    }
  });
} catch (error) {
  console.error(error);
}
