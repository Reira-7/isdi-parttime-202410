var registerView = document.createElement("main");

var registerTitle = document.createElement("h2");
registerTitle.innerText = "Register";
registerView.appendChild(registerTitle);

var registerForm = document.createElement("form");
registerView.appendChild(registerForm);

var registerFormNameLabel = document.createElement("label");
registerFormNameLabel.innerText = "Name";
registerFormNameLabel.hrmlFor = "name";
registerForm.appendChild(registerFormNameLabel);

var registerFormNameInput = document.createElement("input");
registerFormNameInput.type = "text";
registerFormNameInput.id = "name";
registerForm.appendChild(registerFormNameLabel);

var registerFormEmailLabel = document.createElement("label");
registerFormEmailLabel.innerText = "Email";
registerFormEmailLabel.htmlFor = "email";
registerForm.appendChild(registerFormEmailLabel);

var registerFormEmailInput = document.createElement("input");
