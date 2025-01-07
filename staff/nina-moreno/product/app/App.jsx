const { useState } = React;

function App() {
  const [view, setView] = useState(logic.isUserLoggedIn() ? "home" : "landing");

  console.log("App -> render");

  const handleRegisterClick = () => setView("register");

  const handleLoginClick = () => setView("login");

  const handleUserLoggedIn = () => setView("home");

  const handleUserRegistered = () => setView("login");

  const handleUserLoggedOut = () => setView("login");

  return (
    <>
      <h1>Hola, App!</h1>

      {view === "landing" && (
        <Landing
          onRegisterClicked={handleRegisterClick}
          onLoginClicked={handleLoginClick}
        />
      )}
      {view === "login" && (
        <Login
          onRegisterClicked={handleRegisterClick}
          onUserLoggedIn={handleUserLoggedIn}
        />
      )}
      {view === "register" && (
        <Register
          onLoginClicked={handleLoginClick}
          onUserRegistered={handleUserRegistered}
        />
      )}
      {view === "home" && <Home onUserLoggedOut={handleUserLoggedOut} />}
    </>
  );
}
