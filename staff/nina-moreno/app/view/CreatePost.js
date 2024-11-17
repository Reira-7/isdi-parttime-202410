class CreatePost extends Component {
  constructor() {
    super(document.createElement("section"));

    const title = new Heading(3);
    title.setText("Create Post");
    this.add(title);

    const form = new Form();
    this.add(form);

    const imageLabel = new Label("image");
    imageLabel.setText("Image");
    form.add(imageLabel);

    const imageInput = new Input("text", "image");
    form.add(imageInput);

    const textLabel = new Label("text");
    textLabel.setText("Text");
    form.add(textLabel);

    const textInput = new Input("text", "text");
    form.add(textInput);

    const submitButton = new Button("submit");
    submitButton.setText("Create");
    form.add(submitButton);
  }

  onCreated(callback) {
    const form = this.children[1];

    form.addBehavior("submit", (event) => {
      event.preventDefault();

      const imageInput = form.children[1];
      const textInput = form.children[3];

      const image = imageInput.getValue();
      const text = textInput.getValue();

      try {
        logic.createPost(image, text);

        form.clear();

        callback();
      } catch (error) {
        alert(error.message);

        console.error(error);
      }
    });
  }
}
