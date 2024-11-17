class Form extends Component {
  constructor() {
    super(document.createElement("form"));
  }

  clear() {
    this.container.reset();
  }
}
