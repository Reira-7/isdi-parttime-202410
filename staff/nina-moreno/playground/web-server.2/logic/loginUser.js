const validate = require("./helpers/validate");

const localStorage = require("../data/localStorage");
const sessionStorage = require("../data/sessionStorage");

const loginUser = (username, password) => {
  validate.username(username);
  validate.password(password);

  const users = JSON.parse(localStorage.users);

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) throw new Error("wrong credentials");
  sessionStorage.userId = user.id;
};

module.exports = loginUser;
