const Component = React.Component;

class Login extends Component {
  constructor(props) {
    console.log("Login -> constructor");

    super(props);
  }

  render() {
    console.log("Login -> render");

    return (
      <main>
        <h2>Login</h2>

        <form
          onSubmit={(event) => {
            event.preventDefault();

            const form = event.target;

            const username = form.username.value;
            const password = form.password.value;

            try {
              logic.loginUser(username, password);

              form.reset();

              this.props.onUserLoggedIn();
            } catch (error) {
              alert(error.message);

              console.error(error);
            }
          }}
        >
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />

          <button type="submit">Login</button>
        </form>

        <a
          href=""
          onClick={(event) => {
            event.preventDefault();

            this.props.onRegisterClicked();
          }}
        >
          Register
        </a>
      </main>
    );
  }
}
