class Input extends Component {
  constructor(type, id) {
    super(document.createElement("input"));

    this.container.type = type;
    this.container.id = id;
  }

  getValue() {
    return this.container.value;
  }
}
