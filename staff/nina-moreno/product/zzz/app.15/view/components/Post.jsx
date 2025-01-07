const Component = React.Component;

class Post extends Component {
  constructor(props) {
    console.log("Post -> constructor");

    super(props);
  }

  render() {
    console.log("Post -> render");

    return (
      <article>
        <h3>{this.props.post.author.username}</h3>

        <img src={this.props.post.image} />

        <p>{this.props.post.text}</p>

        <time>{this.props.post.date}</time>

        {this.props.post.own && (
          <button
            type="button"
            onClick={() => {
              if (confirm("Delete post?"))
                try {
                  logic.deletePost(this.props.post.id);

                  this.props.onPostDeleted();
                } catch (error) {
                  alert(error.message);

                  console.error(error);
                }
            }}
          >
            🗑️
          </button>
        )}
      </article>
    );
  }
}
