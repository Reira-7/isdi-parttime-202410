function Login(props) {
  console.log("Login -> render");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const username = form.username.value;
    const password = form.password.value;

    try {
      logic
        .loginUser(username, password)
        .then(() => {
          form.reset();

          props.onUserLoggedIn();
        })
        .catch((error) => {
          alert(error.message);

          console.error(error);
        });
    } catch (error) {
      alert(error.message);

      console.error(error);
    }
  };

  const handleRegisterLinkClick = (event) => {
    event.preventDefault();

    props.onRegisterClicked();
  };

  return (
    <main>
      <h2>Login</h2>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>
      </form>

      <a href="" onClick={handleRegisterLinkClick}>
        Register
      </a>
    </main>
  );
}
