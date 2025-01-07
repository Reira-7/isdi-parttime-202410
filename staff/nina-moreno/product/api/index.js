import express from "express";
import cors from "cors";

import logic from "./logic/index.js";

const PORT = 8080;

const api = express();

const jsonBodyParser = express.json();

api.use(cors());

api.get("/", (req, res) => res.send("Hello, API!"));

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

api.get("/users", (req, res) => {
  try {
    const userId = req.headers.authorization.slice(6); // Basic abc123

    const name = logic.getUserName(userId);

    res.json(name);
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message });
  }
});

api.get("/posts", (req, res) => {
  try {
    const userId = req.headers.authorization.slice(6); // Basic abc123

    const posts = logic.getPosts(userId);

    res.json(posts);
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message });
  }
});

api.post("/posts", jsonBodyParser, (req, res) => {
  try {
    const userId = req.headers.authorization.slice(6); // Basic abc123

    const { image, text } = req.body;

    logic.createPost(userId, image, text);

    res.status(201).send();
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message });
  }
});

api.delete("/posts/:postId", jsonBodyParser, (req, res) => {
  try {
    const userId = req.headers.authorization.slice(6); // Basic abc123

    const { postId } = req.params;

    logic.deletePost(userId, postId);

    res.status(204).send();
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message });
  }
});

api.listen(PORT, () => console.log(`API running on port ${PORT}`));
