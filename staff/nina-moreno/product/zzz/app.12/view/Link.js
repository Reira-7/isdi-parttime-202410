class Link extends Component {
  constructor() {
    super(document.createElement("a"));

    this.container.href = "";
  }

  setText(text) {
    this.container.innerText = text;
  }
}
