const fs = require("fs");

const localStorage = {
  get users() {
    // ex: const users = JSON.parse(localStorage.users)
    const users = fs.readFileSync("./data/users.json", "utf8");

    return users;
  },

  set users(users) {
    // ex: localStorage.users = JSON.stringify(users)
    fs.writeFileSync("./data/users.json", users);
  },
};

module.exports = localStorage;
