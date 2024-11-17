class PostItem extends Component {
  constructor(post) {
    super(document.createElement("article"));

    this.post = post;

    const author = new Heading(3);
    author.setText(post.author.username);
    this.add(author);

    const image = new Image(post.image);
    this.add(image);

    const text = new Paragraph();
    text.setText(post.text);
    this.add(text);

    const date = new Time();
    date.setText(post.date);
    this.add(date);

    //if (post.author.id === logic.getUserId()) {
    if (post.own) {
      const deleteButton = new Button("button");
      deleteButton.setText("🗑️");
      this.add(deleteButton);
    }
  }

  onDeleted(callback) {
    const deleteButton = this.children[4];

    if (deleteButton)
      deleteButton.addBehavior("click", () => {
        if (confirm("Delete post?"))
          try {
            logic.deletePost(this.post.id);

            callback();
          } catch (error) {
            alert(error.message);

            console.error(error);
          }
      });
  }
}
