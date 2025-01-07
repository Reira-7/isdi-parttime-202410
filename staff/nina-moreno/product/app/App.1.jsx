const { useState } = React;

function App() {
  const [view, setView] = useState(logic.isUserLoggedIn() ? "home" : "landing");

  console.log("App -> render");

  return (
    <>
      <h1>Hola, App!</h1>

      {view === "landing" && (
        <Landing
          onRegisterClicked={() => setView("register")}
          onLoginClicked={() => setView("login")}
        />
      )}
      {view === "login" && (
        <Login
          onRegisterClicked={() => setView("register")}
          onUserLoggedIn={() => setView("home")}
        />
      )}
      {view === "register" && (
        <Register
          onLoginClicked={() => setView("login")}
          onUserRegistered={() => setView("login")}
        />
      )}
      {view === "home" && <Home onUserLoggedOut={() => setView("login")} />}
    </>
  );
}
