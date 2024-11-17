class Image extends Component {
  constructor(url) {
    super(document.createElement("img"));

    this.container.src = url;
  }
}
