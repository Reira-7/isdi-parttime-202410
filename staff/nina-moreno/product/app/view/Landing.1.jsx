function Landing(props) {
  console.log("Landing -> render");

  return (
    <main>
      <h2>Welcome!</h2>

      <p>
        <a
          href=""
          onClick={(event) => {
            event.preventDefault();

            props.onRegisterClicked();
          }}
        >
          Register
        </a>{" "}
        or{" "}
        <a
          href=""
          onClick={(event) => {
            event.preventDefault();

            props.onLoginClicked();
          }}
        >
          Login
        </a>
      </p>
    </main>
  );
}
