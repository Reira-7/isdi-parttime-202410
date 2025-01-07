class Button extends Component {
  constructor(type) {
    super(document.createElement("button"));

    this.container.type = type;
  }

  setText(text) {
    this.container.innerText = text;
  }
}
