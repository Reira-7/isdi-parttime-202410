import fs from "fs";

const db = {
  get users() {
    const users = fs.readFileSync("./data/users.json", "utf8");

    return JSON.parse(users);
  },

  set users(users) {
    fs.writeFileSync("./data/users.json", JSON.stringify(users));
  },

  get posts() {
    const posts = fs.readFileSync("./data/posts.json", "utf8");

    return JSON.parse(posts);
  },

  set posts(posts) {
    fs.writeFileSync("./data/posts.json", JSON.stringify(posts));
  },
};

export default db;
