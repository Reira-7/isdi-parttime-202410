class Home extends Component {
  constructor() {
    super(document.createElement("main"));

    const title = new Heading(2);
    title.setText("Home");
    this.add(title);

    const userGreeting = new Heading(3);
    userGreeting.setText("Hello, User!");
    this.add(userGreeting);

    const logoutButton = new Button("button");
    logoutButton.setText("Logout");
    this.add(logoutButton);

    const addPostButton = new Button("button");
    addPostButton.setText("+");
    this.add(addPostButton);
  }
}
