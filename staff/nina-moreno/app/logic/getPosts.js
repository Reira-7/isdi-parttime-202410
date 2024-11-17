logic.getPosts = () => {
  const users = JSON.parse(localStorage.users);
  const posts = JSON.parse(localStorage.posts);

  posts.forEach((post) => {
    const authorId = post.author;

    const user = users.find((user) => user.id === authorId);

    const username = user.username;

    post.author = {
      id: authorId,
      username: username,
    };

    post.own = authorId === sessionStorage.userId;
  });

  return posts.reverse();
};
