import express from "express";

import logic from "./logic/index.js";

const PORT = 8080;

const api = express();

const jsonBodyParser = express.json();

api.get("/helloworld", (req, res) => res.send("Hello, API!"));

api.post("/users", jsonBodyParser, (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    logic.registerUser(name, email, username, password);

    res.status(201).send();
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message });
  }
});

api.post("/users/auth", jsonBodyParser, (req, res) => {
  try {
    const { username, password } = req.body;

    const userId = logic.authenticateUser(username, password);

    res.json(userId);
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message });
  }
});

// TODO implement route and middleware for get user name

api.get("/users/:userId", (req, res) => {
  try {
    const { userId } = req.params;

    const name = logic.getUserName(userId);

    res.json(name);
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message });
  }
});

api.listen(PORT, () => console.log(`API running on port ${PORT}`));
