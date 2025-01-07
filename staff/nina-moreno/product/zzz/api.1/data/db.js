import fs from "fs";

const db = {
  get users() {
    const users = fs.readFileSync("./data/users.json", "utf8");

    return JSON.parse(users);
  },

  set users(users) {
    fs.writeFileSync("./data/users.json", JSON.stringify(users));
  },
};

export default db;
