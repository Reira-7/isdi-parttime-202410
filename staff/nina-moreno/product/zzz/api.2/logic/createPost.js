import validate from "./helper/validate.js";

import db from "../data/db.js";
import uuid from "../data/uuid.js";

const createPost = (userId, image, text) => {
  validate.id(userId, "userId");
  validate.image(image);
  validate.text(text);

  const { users, posts } = db;

  const user = users.find((user) => user.id === userId);

  if (!user) throw new Error("user not found");

  const post = {
    id: uuid(),
    author: userId,
    image,
    text,
    date: new Date().toISOString(),
  };

  posts.push(post);

  db.posts = posts;
};

export default createPost;
