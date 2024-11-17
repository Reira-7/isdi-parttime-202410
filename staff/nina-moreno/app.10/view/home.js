var homeView = document.createElement("main");

if (logic.isUserLoggedIn()) body.appendChild(homeView);

var homeTitle = document.createElement("h2");
homeTitle.innerText = "Home";
homeView.appendChild(homeTitle);

var homeUser = document.createElement("h3");
homeUser.innerText = "Hello, User!";
homeView.appendChild(homeUser);

if (logic.isUserLoggedIn()) {
  var name = logic.getUserName();

  homeUser.innerText = "Hello, " + name + "!";
}

var homeLogoutButton = document.createElement("button");
homeLogoutButton.innerText = "Logout";
homeView.appendChild(homeLogoutButton);

homeLogoutButton.onclick = function () {
  logic.logoutUser();

  body.removeChild(homeView);
  body.appendChild(loginView);
};

var homeAddPostButton = document.createElement("button");
homeAddPostButton.innerText = "+";
homeView.appendChild(homeAddPostButton);

homeAddPostButton.onclick = function () {
  homeView.removeChild(homePosts);
  homeView.appendChild(homeCreatePost);
};

var homePosts = document.createElement("section");
homeView.appendChild(homePosts);

if (logic.isUserLoggedIn()) {
  var posts = logic.getPosts();

  homePosts.innerHTML = "";

  posts.forEach(function (post) {
    var homePost = document.createElement("article");
    homePosts.appendChild(homePost);

    var postAuthor = document.createElement("h3");
    postAuthor.innerText = post.author.username;
    homePost.appendChild(postAuthor);

    var postImage = document.createElement("img");
    postImage.src = post.image;
    homePost.appendChild(postImage);

    var postText = document.createElement("p");
    postText.innerText = post.text;
    homePost.appendChild(postText);

    var postDate = document.createElement("time");
    postDate.innerText = post.date;
    homePost.appendChild(postDate);
  });
}

var homeCreatePost = document.createElement("section");

var homeCreatePostTitle = document.createElement("h3");
homeCreatePostTitle.innerText = "Create Post";
homeCreatePost.appendChild(homeCreatePostTitle);

var homeCreatePostForm = document.createElement("form");
homeCreatePost.appendChild(homeCreatePostForm);

var homeCreatePostImageLabel = document.createElement("label");
homeCreatePostImageLabel.innerText = "Image";
homeCreatePostImageLabel.htmlFor = "image";
homeCreatePostForm.appendChild(homeCreatePostImageLabel);

var homeCreatePostImageInput = document.createElement("input");
homeCreatePostImageInput.type = "url";
homeCreatePostImageInput.id = "image";
homeCreatePostForm.appendChild(homeCreatePostImageInput);

var homeCreatePostTextLabel = document.createElement("label");
homeCreatePostTextLabel.innerText = "Text";
homeCreatePostTextLabel.htmlFor = "text";
homeCreatePostForm.appendChild(homeCreatePostTextLabel);

var homeCreatePostTextInput = document.createElement("input");
homeCreatePostTextInput.type = "text";
homeCreatePostTextInput.id = "text";
homeCreatePostForm.appendChild(homeCreatePostTextInput);

var homeCreatePostSubmitButton = document.createElement("button");
homeCreatePostSubmitButton.innerText = "Create";
homeCreatePostSubmitButton.type = "submit";
homeCreatePostForm.appendChild(homeCreatePostSubmitButton);

homeCreatePostForm.onsubmit = function (event) {
  event.preventDefault();

  var image = homeCreatePostImageInput.value;
  var text = homeCreatePostTextInput.value;

  try {
    logic.createPost(image, text);

    homeCreatePostForm.reset();

    homeView.removeChild(homeCreatePost);
    homeView.appendChild(homePosts);

    var posts = logic.getPosts();

    homePosts.innerHTML = "";

    posts.forEach(function (post) {
      var homePost = document.createElement("article");
      homePosts.appendChild(homePost);

      var postAuthor = document.createElement("h3");
      postAuthor.innerText = post.author.username;
      homePost.appendChild(postAuthor);

      var postImage = document.createElement("img");
      postImage.src = post.image;
      homePost.appendChild(postImage);

      var postText = document.createElement("p");
      postText.innerText = post.text;
      homePost.appendChild(postText);

      var postDate = document.createElement("time");
      postDate.innerText = post.date;
      homePost.appendChild(postDate);
    });
  } catch (error) {
    alert(error.message);

    console.error(error);
  }
};
