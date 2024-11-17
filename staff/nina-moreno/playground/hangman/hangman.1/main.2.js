const root = ReactDOM.createRoot(document.querySelector("#root"));

const jsx = React.createElement;

const title = jsx("h1", {
  children: ["Hangman"],
  style: {
    backgroundColor: "tomato",
    color: "gold",
  },
});

const charLabel = jsx("label", { children: ["Char"], htmlFor: "char" });
const charInput = jsx("input", { type: "text", id: "char" });
const charSubmitButton = jsx("button", { children: ["Try"], type: "submit" });
const charForm = jsx("form", {
  children: [charLabel, charInput, charSubmitButton],
  onSubmit: (event) => {
    event.preventDefault();

    const form = event.target;
    const input = form.char;

    const char = input.value;

    console.log(char);
  },
});

root.render([title, charForm]);
