class Landing extends Component {
  constructor() {
    super(document.createElement("main"));

    const title = new Heading(2);
    title.setText("Welcome!");
    this.add(title);

    const intro = new Paragraph();
    this.add(intro);

    const registerLink = new Link();
    registerLink.setText("Register");
    intro.add(registerLink);

    const orText = new Text(" or ");
    intro.add(orText);

    const loginLink = new Link();
    loginLink.setText("Login");
    intro.add(loginLink);
  }

  onRegisterClick(callback) {
    const registerLink = this.children[1].children[0];

    registerLink.addBehavior("click", (event) => {
      event.preventDefault();

      callback();
    });
  }

  onLoginClick(callback) {
    const loginLink = this.children[1].children[2];

    loginLink.addBehavior("click", (event) => {
      event.preventDefault();

      callback();
    });
  }
}
