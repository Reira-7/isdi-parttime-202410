import validate from "./helper/validate.js";

import db from "../data/db.js";

const deletePost = (userId, postId) => {
  validate.id(userId, "userId");
  validate.id(postId, "postId");

  const { users, posts } = db;

  const user = users.find((user) => user.id === userId);

  if (!user) throw new Error("user not found");

  const index = posts.findIndex((post) => post.id === postId);

  if (index < 0) throw new Error("post not found");

  posts.splice(index, 1);

  db.posts = posts;
};

export default deletePost;
