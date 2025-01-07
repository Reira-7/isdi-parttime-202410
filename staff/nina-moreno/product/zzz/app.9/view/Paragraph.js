class Paragraph extends Component {
  constructor() {
    super(document.createElement("p"));
  }

  setText(text) {
    this.container.innerText = text;
  }
}
