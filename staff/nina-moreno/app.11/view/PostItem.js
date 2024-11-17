class PostItem extends Component {
  constructor(post) {
    super(document.createElement("article"));

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
  }
}
