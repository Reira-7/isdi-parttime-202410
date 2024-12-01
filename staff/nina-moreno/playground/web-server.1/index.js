const express = require("express");

const server = express();

const logic = require("./logic/index");

const PORT = 8080;

server.get("/login", (req, res) => {
  if (logic.isUserLoggedIn()) {
    res.redirect("/");

    return;
  }

  res.send(`<doctype html>
<html>
    <head>
        <title>Login</title>
    </head>
    <body>
        <h2>Login</h2>

        <form action="/login" method="post">
            <label for="username">Username</label>
            <input id="username" name="username" type="text">

            <label for="password">Password</label>
            <input id="passwor"d" name="password" type="password">

            <button type="submit">Login</button>
        </form>
    </body>
</html>
`);
});

server.post("/login", express.urlencoded({ extended: true }), (req, res) => {
  const { username, password } = req.body;

  try {
    logic.loginUser(username, password);

    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

server.get("/", (req, res) => {
  if (!logic.isUserLoggedIn()) {
    res.redirect("/login");

    return;
  }

  let name;

  try {
    name = logic.getUserName();
  } catch (error) {
    res.status(400).send(error.message);

    return;
  }

  res.send(`<doctype html>
<html>
    <head>
        <title>Home</title>
    </head>
    <body>
        <h2>Home</h2>

        <p>Hello, ${name}!</p>

        <form action="/logout" method="post">
            <button type="submit">Logout</button>
        </form>
    </body>
</html>
`);
});

server.post("/logout", (req, res) => {
  try {
    logic.logoutUser();

    res.redirect("/login");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

server.listen(PORT, () => console.log(`server listening on port ${PORT}`));

server.post("/datos", (req, res) => {
  const { name, age } = req.body;
  res.send(`Nombre: ${name}, Edad: ${age}`);
});
