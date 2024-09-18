const initialData = [
  {
    todoItemId: 0,
    name: "an item",
    priority: 3,
    completed: false,
  },
  {
    todoItemId: 1,
    name: "another item",
    priority: 2,
    completed: false,
  },
  {
    todoItemId: 2,
    name: "a done item",
    priority: 1,
    completed: true,
  },
];

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  const obj = { status: "ok" };
  res.json(obj).status(200);
});

app.get("/api/TodoItems", (req, res) => {
  res.send(initialData).status(200);
});

module.exports = app;
