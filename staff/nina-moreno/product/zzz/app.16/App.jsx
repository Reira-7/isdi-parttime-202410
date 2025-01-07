const Component = React.Component;

class App extends Component {
  constructor(props) {
    console.log("App -> constructor");

    super(props);

    this.state = { view: "landing" };
  }

  render() {
    console.log("App -> render");

    return (
      <>
        <h1>Hola, App!</h1>

        {this.state.view === "landing" && (
          <Landing
            onRegisterClicked={() => this.setState({ view: "register" })}
            onLoginClicked={() => this.setState({ view: "login" })}
          />
        )}
        {this.state.view === "login" && (
          <Login
            onRegisterClicked={() => this.setState({ view: "register" })}
            onUserLoggedIn={() => this.setState({ view: "home" })}
          />
        )}
        {this.state.view === "register" && (
          <Register
            onLoginClicked={() => this.setState({ view: "login" })}
            onUserRegistered={() => this.setState({ view: "login" })}
          />
        )}
        {this.state.view === "home" && (
          <Home onUserLoggedOut={() => this.setState({ view: "login" })} />
        )}
      </>
    );
  }
}
