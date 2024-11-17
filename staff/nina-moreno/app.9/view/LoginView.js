class LoginView extends Component {
  constructor() {
    super(document.createElement("main"));

    const title = new Heading(2);
    title.setText("Login");
    this.add(title);
  }
}
