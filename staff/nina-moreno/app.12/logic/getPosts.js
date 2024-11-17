(function () {
  function getPosts() {
    var users = JSON.parse(localStorage.users);
    var posts = JSON.parse(localStorage.posts);

    posts.forEach(function (post) {
      var authorId = post.author;

      var user = users.find(function (user) {
        return user.id === authorId;
      });

      var username = user.username;

      post.author = {
        id: authorId,
        username: username,
      };

      post.own = authorId === sessionStorage.userId;
    });

    return posts.reverse();
  }

  logic.getPosts = getPosts;
})();
