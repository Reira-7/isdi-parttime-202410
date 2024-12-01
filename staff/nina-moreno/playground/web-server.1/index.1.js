const express = require("express");

const server = express();

const port = "8080";

server.get("/helloworld", (req, res) => res.send("Hello, World!"));

server.get("/hello", (req, res) => {
  const to = req.query.to;

  res.send(`Hello, ${to}!`);
});

// http://localhost:8080/salute?type=Bye&to=Peter

server.get("/salute", (req, res) => {
  const type = req.query.type || "Hello";
  const to = req.query.to;

  res.send(`${type}, ${to}!`);
});

server.get("/add/:a/:b", (req, res) => {
  const a = req.params.a;
  const b = req.params.b;

  const result = Number(a) + Number(b);

  res.send(`result = ${result}`);
});

server.use(express.json());
server.use(express.urlencoded());

server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

server.get("/datos", (req, res) => {
  res.send(`<form action="/datos" method="post">
    <label for="name-input">Name</label>
    <input id="name-input" type="text" name="name">
  
    <label for="age-input">Age</label>
    <input id="age-input" type="number" name="age">
  
    <button type="submit">Submit Info!</button>
  </form>
 
`);
});

server.post("/datos", (req, res) => {
  const { name, age } = req.body;
  res.send(`Nombre: ${name}, Edad: ${age}`);
});
