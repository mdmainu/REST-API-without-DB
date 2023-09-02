const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "mainul islam",
    email: "islammdmainu@gmail.com",
  },
  {
    id: uuidv4(),
    username: "monirul islam",
    email: "monirul@gmail.com",
  },
];

module.exports = users;
