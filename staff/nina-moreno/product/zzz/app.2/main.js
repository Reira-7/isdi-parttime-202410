// presentation & business (logic)

var body = document.body;

var title = document.createElement("h1");
title.innerText = "Hola, App!";
body.appendChild(title);

// landing

var landingView = document.createElement("main");
body.appendChild(landingView);

var landingTitle = document.createElement("h2");
landingTitle.innerText = "Welcome!";
landingView.appendChild(landingTitle);

var landingIntro = document.createElement("p");
landingView.appendChild(landingIntro);

var landingRegisterLink = document.createElement("a");
landingRegisterLink.href = "";
landingRegisterLink.innerText = "Register";
landingIntro.appendChild(landingRegisterLink);

landingRegisterLink.onclick = function (event) {
  event.preventDefault();

  body.removeChild(landingView);
  body.appendChild(registerView);
};

var landingIntroOrText = new Text(" or ");
landingIntro.appendChild(landingIntroOrText);

var landingLoginLink = document.createElement("a");
landingLoginLink.href = "";
landingLoginLink.innerText = "Login";
landingIntro.appendChild(landingLoginLink);

landingLoginLink.onclick = function (event) {
  event.preventDefault();

  body.removeChild(landingView);
  body.appendChild(loginView);
};

// register

var registerView = document.createElement("main");

var registerTitle = document.createElement("h2");
registerTitle.innerText = "Register";
registerView.appendChild(registerTitle);

var registerForm = document.createElement("form");
registerView.appendChild(registerForm);

var registerFormNameLabel = document.createElement("label");
registerFormNameLabel.innerText = "Name";
registerFormNameLabel.htmlFor = "name";
registerForm.appendChild(registerFormNameLabel);

var registerFormNameInput = document.createElement("input");
registerFormNameInput.type = "text";
registerFormNameInput.id = "name";
registerForm.appendChild(registerFormNameInput);

var registerFormEmailLabel = document.createElement("label");
registerFormEmailLabel.innerText = "E-mail";
registerFormEmailLabel.htmlFor = "email";
registerForm.appendChild(registerFormEmailLabel);

var registerFormEmailInput = document.createElement("input");
registerFormEmailInput.type = "email";
registerFormEmailInput.id = "email";
registerForm.appendChild(registerFormEmailInput);

var registerFormUsernameLabel = document.createElement("label");
registerFormUsernameLabel.innerText = "Username";
registerFormUsernameLabel.htmlFor = "username";
registerForm.appendChild(registerFormUsernameLabel);

var registerFormUsernameInput = document.createElement("input");
registerFormUsernameInput.type = "text";
registerFormUsernameInput.id = "username";
registerForm.appendChild(registerFormUsernameInput);

var registerFormPasswordLabel = document.createElement("label");
registerFormPasswordLabel.innerText = "Password";
registerFormPasswordLabel.htmlFor = "password";
registerForm.appendChild(registerFormPasswordLabel);

var registerFormPasswordInput = document.createElement("input");
registerFormPasswordInput.type = "password";
registerFormPasswordInput.id = "password";
registerForm.appendChild(registerFormPasswordInput);

var registerFormSubmitButton = document.createElement("button");
registerFormSubmitButton.type = "submit";
registerFormSubmitButton.innerText = "Register";
registerForm.appendChild(registerFormSubmitButton);

registerForm.onsubmit = function (event) {
  event.preventDefault();

  var name = registerFormNameInput.value;
  var email = registerFormEmailInput.value;
  var username = registerFormUsernameInput.value;
  var password = registerFormPasswordInput.value;
  try {
    registerUser(name, email, username, password);

    registerForm.reset();

    body.removeChild(registerView);
    body.appendChild(loginView);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
};

var registerLoginLink = document.createElement("a");
registerLoginLink.href = "";
registerLoginLink.innerText = "Login";

registerLoginLink.onclick = function (event) {
  event.preventDefault();

  body.removeChild(registerView);
  body.appendChild(loginView);
};
registerView.appendChild(registerLoginLink);

// login

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
    var user = authenticateUser(username, password);

    loginForm.reset();
    homeUser.innerText = "Hello, " + user.name + "!";

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

// home

var homeView = document.createElement("main");

var homeTitle = document.createElement("h2");
homeTitle.innerText = "Home";
homeView.appendChild(homeTitle);

var homeUser = document.createElement("h3");
homeUser.innerText = "Hello, User!";
homeView.appendChild(homeUser);

var homeLogoutButton = document.createElement("button");
homeLogoutButton.innerText = "Logout";
homeView.appendChild(homeLogoutButton);

homeLogoutButton.onclick = function () {
  body.removeChild(homeView);
  body.appendChild(loginView);
};
