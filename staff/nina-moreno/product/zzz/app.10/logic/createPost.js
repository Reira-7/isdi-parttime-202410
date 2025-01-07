(function () {
  function createPost(image, text) {
    if (typeof image !== "string") throw new Error("invalid image type");
    if (typeof text !== "string") throw new Error("invalid text type");

    var posts = JSON.parse(localStorage.posts);

    var post = {
      id: uuid(),
      author: sessionStorage.userId,
      image: image,
      text: text,
      date: new Date().toISOString(),
    };

    posts.push(post);
    localStorage.posts = JSON.stringify(posts);
  }
  logic.createPost = createPost;
})();
