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
