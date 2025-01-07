class Label extends Component {
  constructor(targetId) {
    super(document.createElement("label"));

    this.container.htmlFor = targetId;
  }

  setText(text) {
    this.container.innerText = text;
  }
}
