class Heading extends Component {
  constructor(level) {
    super(document.createElement(`h${level}`));
  }

  setText(text) {
    this.container.innerText = text;
  }
}
