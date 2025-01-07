const { useState, useEffect } = React;

function Home(props) {
  const [view, setView] = useState("posts");
  const [name, setName] = useState(null);

  useEffect(() => {
    console.log('Home -> "componentDidMount" (useEffect)');

    try {
      logic
        .getUserName()
        .then((name) => setName(name))
        .catch((error) => {
          alert(error.message);

          console.error(error);
        });
    } catch (error) {
      alert(error.message);

      console.error(error);
    }
  }, []);

  console.log("Home -> render");

  return (
    <main>
      <h2>Home</h2>

      <h3>Hello, {name}!</h3>

      <button
        type="button"
        onClick={() => {
          try {
            logic.logoutUser();

            props.onUserLoggedOut();
          } catch (error) {
            alert(error.message);

            console.error(error);
          }
        }}
      >
        Logout
      </button>

      <button type="button" onClick={() => setView("create-post")}>
        +
      </button>

      {view === "posts" && <Posts />}
      {view === "create-post" && (
        <CreatePost onPostCreated={() => setView("posts")} />
      )}
    </main>
  );
}
