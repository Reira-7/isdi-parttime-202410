function getPosts() {
  var posts = JSON.parse(localStorage.posts);

  return posts.reverse();
}
