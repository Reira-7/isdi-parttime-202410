const Component = React.Component;

class Posts extends Component {
  constructor(props) {
    console.log("Posts -> constructor");

    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
    console.log("Posts -> componentDidMount");

    try {
      const posts = logic.getPosts();

      this.setState({ posts });
    } catch (error) {
      alert(error.message);

      console.error(error);
    }
  }

  render() {
    console.log("Posts -> render");

    return (
      <section>
        {this.state.posts.map((post) => (
          <Post
            key={post.id}
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
    );
  }
}
