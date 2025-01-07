import validate from "./helper/validate.js";

import db from "../data/db.js";

const authenticateUser = (username, password) => {
  validate.username(username);
  validate.password(password);

  const { users } = db;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) throw new Error("wrong credentials");

  return user.id;
};

export default authenticateUser;
