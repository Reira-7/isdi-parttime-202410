var homeView = document.createElement("main");

if (isUserLoggedIn()) body.appendChild(homeView);

var homeTitle = document.createElement("h2");
homeTitle.innerText = "Home";
homeView.appendChild(homeTitle);

var homeUser = document.createElement("h3");
homeUser.innerText = "Hello, User!";
homeView.appendChild(homeUser);

if (isUserLoggedIn()) {
  var name = getUserName();

  homeUser.innerText = "Hello, " + name + "!";
}

var homeLogoutButton = document.createElement("button");
homeLogoutButton.innerText = "Logout";
homeView.appendChild(homeLogoutButton);

homeLogoutButton.onclick = function () {
  logoutUser();

  body.removeChild(homeView);
  body.appendChild(loginView);
};

var homePosts = document.createElement("section");
homeView.appendChild(homePosts);

if (isUserLoggedIn()) {
  var posts = getPosts();

  homePosts.innerHTML = "";

  posts.forEach(function (post) {
    var homePost = document.createElement("article");
    homePosts.appendChild(homePost);

    var postAuthor = document.createElement("h3");
    postAuthor.innerText = post.author;
    homePost.appendChild(postAuthor);

    var postImage = document.createElement("img");
    postImage.src = post.image;
    homePost.appendChild(postImage);

    var postCaption = document.createElement("p");
    postCaption.innerText = post.text;
    homePost.appendChild(postCaption);

    var postDate = document.createElement("time");
    postDate.innerText = post.date;
    homePost.appendChild(postDate);
  });
}
