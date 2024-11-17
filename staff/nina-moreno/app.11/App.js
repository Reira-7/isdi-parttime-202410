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

    login.onLoggedIn(() => {
      try {
        const name = logic.getUserName();
        home.setUserName(name);

        const posts = logic.getPosts();
        home.setPosts(posts);

        this.remove(login);
        this.add(home);
      } catch (error) {
        alert(error.message);

        console.error(error);
      }
    });

    const register = new Register();

    register.onLoginClick(() => {
      this.remove(register);
      this.add(login);
    });

    register.onRegistered(() => {
      this.remove(register);
      this.add(login);
    });

    const home = new Home();

    home.onLoggedOut(() => {
      this.remove(home);
      this.add(login);
    });
  }
}
