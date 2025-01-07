class PostList extends Component {
  constructor() {
    super(document.createElement("section"));
  }

  setPosts(posts) {
    this.removeAll();

    posts.forEach((post) => {
      const postItem = new PostItem(post);

      if (post.own)
        postItem.onDeleted(() => {
          try {
            const posts = logic.getPosts();

            this.setPosts(posts);
          } catch (error) {
            alert(error.message);

            console.error(error);
          }
        });

      this.add(postItem);
    });
  }
}
