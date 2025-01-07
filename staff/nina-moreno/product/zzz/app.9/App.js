class App extends Component {
  constructor() {
    super(document.body);

    const title = new Heading(1);
    title.setText("Hola, App!");
    this.add(title);

    const landing = new Landing();
    this.add(landing);

    landing.onRegisterClick(() => {
      this.remove(landing);
      this.add(register);
    });

    landing.onLoginClick(() => {
      this.remove(landing);
      this.add(login);
    });

    const login = new Login();
    login.onRegisterClick(() => {
      this.remove(login);
      this.add(register);
    });

    const register = new Register();
    register.onLoginClick(() => {
      this.remove(register);
      this.add(login);
    });

    // const home = new Home
    // this.add(home)
  }
}
