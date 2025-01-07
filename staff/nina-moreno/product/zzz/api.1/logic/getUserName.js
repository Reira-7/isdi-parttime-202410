import validate from "./helper/validate.js";

import db from "../data/db.js";

const getUserName = (userId) => {
  validate.id(userId, "userId");

  const { users } = db;

  const user = users.find((user) => user.id === userId);

  if (!user) throw new Error("user not found");

  return user.name;
};

export default getUserName;
