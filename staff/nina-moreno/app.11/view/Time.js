class Time extends Component {
  constructor() {
    super(document.createElement("time"));
  }

  setText(text) {
    this.container.innerText = text;
  }
}
