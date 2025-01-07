logic.createPost = (image, text) => {
  if (typeof image !== "string") throw new Error("invalid image type");
  if (typeof text !== "string") throw new Error("invalid text type");

  const posts = JSON.parse(localStorage.posts);

  const post = {
    id: uuid(),
    author: sessionStorage.userId,
    image,
    text,
    date: new Date().toISOString(),
  };

  posts.push(post);

  localStorage.posts = JSON.stringify(posts);
};
