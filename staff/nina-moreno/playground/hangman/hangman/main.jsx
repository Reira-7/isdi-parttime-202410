const root = ReactDOM.createRoot(document.querySelector("#root"));

const Component = React.Component;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: null,
      assertions: [],
    };
  }

  render() {
    return (
      <main>
        <h1 style={{ backgroundColor: "tomato", color: "golden" }}>Hangman</h1>

        <form
          onSubmit={(event) => {
            event.preventDefault();

            const form = event.target;
            const input = form.char;
            const char = input.value;
            form.reset();

            const word = this.props.guess;
            const index = word.indexOf(char);

            if (index < 0) this.setState({ feedback: "failed" });
            else {
              const assertions = this.state.assertions.concat();

              assertions[index] = char;

              this.setState({ feedback: "asserted", assertions });
            }
          }}
        >
          <label htmlFor="char">Char</label>
          <input type="text" id="char" />
          <button type="submit">Try</button>
        </form>

        <p>
          {this.props.player}: {this.state.feedback}
        </p>
        <p>assertions: {this.state.assertions.join("")}</p>
      </main>
    );
  }
}

root.render(<App player="manu" guess={"murcielago"} />);
