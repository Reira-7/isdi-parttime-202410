class PostList extends Component {
  constructor() {
    super(document.createElement("section"));
  }

  setPosts(posts) {
    this.removeAll();

    posts.forEach((post) => {
      const postItem = new PostItem(post);

      this.add(postItem);
    });
  }
}
