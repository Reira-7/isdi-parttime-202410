var loginView = document.createElement("main");

var loginTitle = document.createElement("h2");
loginTitle.innerText = "Login";
loginView.appendChild(loginTitle);

var loginForm = document.createElement("form");
loginView.appendChild(loginForm);

var loginFormUsernameLabel = document.createElement("label");
loginFormUsernameLabel.innerText = "Username";
loginFormUsernameLabel.htmlFor = "username";
loginForm.appendChild(loginFormUsernameLabel);

var loginFormUsernameInput = document.createElement("input");
loginFormUsernameInput.type = "text";
loginFormUsernameInput.id = "username";
loginForm.appendChild(loginFormUsernameInput);

var loginFormPasswordLabel = document.createElement("label");
loginFormPasswordLabel.innerText = "Password";
loginFormPasswordLabel.htmlFor = "password";
loginForm.appendChild(loginFormPasswordLabel);

var loginFormPasswordInput = document.createElement("input");
loginFormPasswordInput.type = "password";
loginFormPasswordInput.id = "password";
loginForm.appendChild(loginFormPasswordInput);

var loginFormSubmitButton = document.createElement("button");
loginFormSubmitButton.type = "submit";
loginFormSubmitButton.innerText = "Login";
loginForm.appendChild(loginFormSubmitButton);

loginForm.onsubmit = function (event) {
  event.preventDefault();

  var username = loginFormUsernameInput.value;
  var password = loginFormPasswordInput.value;

  try {
    logic.loginUser(username, password);

    loginForm.reset();

    var name = logic.getUserName();

    homeUser.innerText = "Hello, " + name + "!";

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

      var postCaption = document.createElement("p");
      postCaption.innerText = post.text;
      homePost.appendChild(postCaption);

      var postDate = document.createElement("time");
      postDate.innerText = post.date;
      homePost.appendChild(postDate);
    });

    body.removeChild(loginView);
    body.appendChild(homeView);
  } catch (error) {
    alert(error.message);

    console.error(error);
  }
};

var loginRegisterLink = document.createElement("a");
loginRegisterLink.href = "";
loginRegisterLink.innerText = "Register";

loginRegisterLink.onclick = function (event) {
  event.preventDefault();

  body.removeChild(loginView);
  body.appendChild(registerView);
};
loginView.appendChild(loginRegisterLink);
