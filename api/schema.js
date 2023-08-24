const { buildSchema } = require("graphql");

const schema = buildSchema(`

    type Todo {
        id: ID
        title: String
        checked: Boolean
    }

    input TodoInput {
        id: ID
        title: String!
        checked: Boolean!
    }

    type Query {
        getAllTodos: [Todo]
    }
    type Mutation {
        createTodo(title: String!): Todo
        editTodo(id: ID!, checked: Boolean!): Todo
        deleteTodo(id: ID!): Todo
    }

`);

module.exports = schema;
