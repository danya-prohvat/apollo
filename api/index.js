const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema");

let todoes = [
  { id: "1", title: "deal 1", checked: false },
  { id: "2", title: "deal 2", checked: true },
  { id: "3", title: "deal 3", checked: false },
];

const app = express();

const root = {
  getAllTodos: () => {
    return todoes;
  },
  createTodo: ({ title }) => {
    todoes.push({ id: String(Date.now()), title: title, checked: false });
  },
  editTodo: ({ id, checked }) => {
    todoes = todoes.map((todo) => {
      if (todo.id === id) return { ...todo, checked: checked };

      return todo;
    });
  },
  deleteTodo: ({ id }) => {
    todoes = todoes.filter((todo) => todo.id !== id);
  },
};

app.use(cors());
app.use("/", graphqlHTTP({ graphql: true, schema, rootValue: root }));

app.listen(5001, () => console.log("PORT: 5001"));
