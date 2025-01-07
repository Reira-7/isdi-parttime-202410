(function () {
  function deletePost(postId) {
    validate.id(postId, "postId");

    var posts = JSON.parse(localStorage.posts);

    var index = posts.findIndex(function (post) {
      return post.id === postId;
    });

    if (index < 0) throw new Error("post not found");

    posts.splice(index, 1);

    localStorage.posts = JSON.stringify(posts);
  }

  logic.deletePost = deletePost;
})();
