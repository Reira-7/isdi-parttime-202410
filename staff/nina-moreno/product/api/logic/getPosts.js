import db from "../data/db.js";

import validate from "./helper/validate.js";

const getPosts = (userId) => {
  validate.id(userId, "userId");

  const { users, posts } = db;

  const user = users.find((user) => user.id === userId);

  if (!user) throw new Error("user not found");

  posts.forEach((post) => {
    const authorId = post.author;

    const user = users.find((user) => user.id === authorId);

    const username = user.username;

    post.author = {
      id: authorId,
      username: username,
    };

    post.own = authorId === userId;
  });

  return posts.reverse();
};

export default getPosts;
