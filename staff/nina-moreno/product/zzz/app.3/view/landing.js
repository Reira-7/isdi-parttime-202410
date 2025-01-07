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
