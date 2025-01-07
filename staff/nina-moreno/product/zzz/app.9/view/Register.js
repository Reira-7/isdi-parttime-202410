class Register extends Component {
  constructor() {
    super(document.createElement("main"));

    const title = new Heading(2);
    title.setText("Register");
    this.add(title);

    const form = new Form();
    this.add(form);

    const nameLabel = new Label("name");
    nameLabel.setText("Name");
    form.add(nameLabel);

    const nameInput = new Input("text");
    form.add(nameInput);

    const emailLabel = new Label("email");
    emailLabel.setText("E-mail");
    form.add(emailLabel);

    const emailInput = new Input("email");
    form.add(emailInput);

    const usernameLabel = new Label("username");
    usernameLabel.setText("Username");
    form.add(usernameLabel);

    const usernameInput = new Input("text", "username");
    form.add(usernameInput);

    const passwordLabel = new Label("password");
    passwordLabel.setText("Password");
    form.add(passwordLabel);

    const passwordInput = new Input("password", "password");
    form.add(passwordInput);

    const submitButton = new Button("submit");
    submitButton.setText("Register");
    form.add(submitButton);

    const registerLink = new Link();
    registerLink.setText("Login");
    this.add(registerLink);
  }

  onLoginClick(callback) {
    const loginLink = this.children[2];

    loginLink.addBehavior("click", (event) => {
      event.preventDefault();

      callback();
    });
  }
}
