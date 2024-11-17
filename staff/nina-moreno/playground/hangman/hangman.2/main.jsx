const root = ReactDOM.createRoot(document.querySelector("#root"));

const title = (
  <h1 style={{ backgroundColor: "tomato", color: "golden" }}>Hangman</h1>
);

const charForm = (
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
);

root.render([title, charForm]);
