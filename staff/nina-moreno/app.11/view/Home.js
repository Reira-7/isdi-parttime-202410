class Home extends Component {
  constructor() {
    super(document.createElement("main"));

    const title = new Heading(2);
    title.setText("Home");
    this.add(title);

    const userGreeting = new Heading(3);
    userGreeting.setText("Hello, User!");
    this.add(userGreeting);

    const logoutButton = new Button("button");
    logoutButton.setText("Logout");
    this.add(logoutButton);

    const addPostButton = new Button("button");
    addPostButton.setText("+");
    this.add(addPostButton);

    addPostButton.addBehavior("click", () => {
      this.remove(postList);
      this.add(createPost);
    });

    const postList = new PostList();
    this.add(postList);

    const createPost = new CreatePost();

    createPost.onCreated(() => {
      try {
        const posts = logic.getPosts();
        postList.setPosts(posts);

        this.remove(createPost);
        this.add(postList);
      } catch (error) {
        alert(error.message);

        console.error(error);
      }
    });
  }

  setUserName(name) {
    const userGreeting = this.children[1];

    userGreeting.setText(`Hello, ${name}!`);
  }

  onLoggedOut(callback) {
    const logoutButton = this.children[2];

    logoutButton.addBehavior("click", () => {
      try {
        logic.logoutUser();

        callback();
      } catch (error) {
        alert(error.message);

        console.error(error);
      }
    });
  }

  setPosts(posts) {
    const postList = this.children[4];

    postList.setPosts(posts);
  }
}
