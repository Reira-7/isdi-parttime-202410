const Component = React.Component;

class Home extends Component {
  constructor(props) {
    console.log("Home -> constructor");

    super(props);

    this.state = { name: null, posts: [] };
  }

  componentDidMount() {
    console.log("Home -> componentDidMount");

    try {
      const name = logic.getUserName();
      const posts = logic.getPosts();

      this.setState({ name, posts });
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

        <button type="button">+</button>

        <section>
          {this.state.posts.map((post) => (
            <Post
              post={post}
              onPostDeleted={() => {
                try {
                  const posts = logic.getPosts();

                  this.setState({ posts });
                } catch (error) {
                  alert(error.message);

                  console.error(error);
                }
              }}
            />
          ))}
        </section>
      </main>
    );
  }
}
