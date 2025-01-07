const Component = React.Component;

class Home extends Component {
  constructor(props) {
    console.log("Home -> constructor");

    super(props);

    this.state = { name: null, view: "posts" };
  }

  componentDidMount() {
    console.log("Home -> componentDidMount");

    try {
      const name = logic.getUserName();

      this.setState({ name });
    } catch (error) {
      alert(error.message);

      console.error(error);
    }
  }

  render() {
    console.log("Home -> render");

    return (
      <main>
        <h2>Home</h2>

        <h3>Hello, {this.state.name}!</h3>

        <button
          type="button"
          onClick={() => {
            try {
              logic.logoutUser();

              this.props.onUserLoggedOut();
            } catch (error) {
              alert(error.message);

              console.error(error);
            }
          }}
        >
          Logout
        </button>

        <button
          type="button"
          onClick={() => this.setState({ view: "create-post" })}
        >
          +
        </button>

        {this.state.view === "posts" && <Posts />}
        {this.state.view === "create-post" && (
          <CreatePost onPostCreated={() => this.setState({ view: "posts" })} />
        )}
      </main>
    );
  }
}
