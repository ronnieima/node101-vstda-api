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

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const obj = { status: "ok" };
  res.json(obj).status(200);
});

app.get("/api/TodoItems", (req, res) => {
  res.send(initialData).status(200);
});

app.get("/api/TodoItems/:number", (req, res) => {
  try {
    const todoId = Number(req.params.number);
    const todoItem = initialData.find((item) => item.todoItemId === todoId);

    if (!todoItem) {
      throw new Error("Todo item was not found");
    }
    res.json(todoItem).status(200);
  } catch (error) {
    throw error;
  }
});

app.post("/api/TodoItems", (req, res) => {
  const { todoItemId, name, priority, completed } = req.body;

  const newTodo = {
    todoItemId,
    name,
    priority,
    completed,
  };

  res.status(201).json(newTodo);
});

app.delete("/api/TodoItems/:number", (req, res) => {
  try {
    const todoId = Number(req.params.number);
    const todoItem = initialData.find((item) => item.todoItemId === todoId);

    if (!todoItem) {
      throw new Error("Todo item was not found");
    }
    res.json(todoItem).status(200);
  } catch (error) {
    throw error;
  }
});

module.exports = app;
