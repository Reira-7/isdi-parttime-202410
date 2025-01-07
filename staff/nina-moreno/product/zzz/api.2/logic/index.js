import authenticateUser from "./authenticateUser.js";
import getUserName from "./getUserName.js";
import registerUser from "./registerUser.js";

import getPosts from "./getPosts.js";
import createPost from "./createPost.js";
import deletePost from "./deletePost.js";

const logic = {
  authenticateUser,
  getUserName,
  registerUser,

  getPosts,
  createPost,
  deletePost,
};

export default logic;
