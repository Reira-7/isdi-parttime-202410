const root = ReactDOM.createRoot(document.querySelector("#root"));

const Component = React.Component;

class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2>Hello, {this.props.name || "World"}!</h2>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
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

            console.log(char);
          }}
        >
          <label htmlFor="char">Char</label>
          <input type="text" id="char" />
          <button type="submit">Try</button>
        </form>
      </main>
    );
  }
}

root.render([<HelloWorld />, <HelloWorld name={"Peter"} />, <App />]); // new HelloWorld({ name: 'Peter' })
