const { ApolloServer, gql } = require('apollo-server');
const { TodosAPI } = require('./datasources/todos_api');
const { PeopleAPI } = require('./datasources/people_api');
const { TodosDB } = require('./datasources/todos_db');


const BASE_URL = 'http://localhost:3000/';

const knexConfig = {
    client: "mysql",
    connection: {
        host: process.env.MARIADB_HOST,
        port: 3306,
        user: process.env.MARIADB_USER,
        password: process.env.MARIADB_PASSWORD,
        database: 'todo_test'
    }
  };

  

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    # Defines the type Todo
    type Todo {
        id: Int
        title: String
        isComplete: Boolean
        owner: Int
    }

    # Defines the type Person, with many Todo
    type Person {
        id: Int
        name: String
        role: String
        created: String
        todos: [Todo]
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
        people: [Person]
        todos: [Todo]
        todo(id: ID!): Todo
        todosFromOwner(ownerId: ID): [Todo]
        todoPeople(todoId: ID): Person
        incompleteTodos: [Todo]
    }
`;

const resolvers = {
    Query: {
        people() {
            // @todo
        },
        async todos(parent, args, context, info) {
            return context.dataSources.todosDB.getTodos();
        },
        async todosFromOwner(parent, args, context, info) {
            return context.dataSources.todosAPI.getTodosFromOwner(args.ownerId);
        },

        async todoPeople(parent, args, context, info) {
            return context.dataSources.peopleAPI.getTodoPeople(args.todoId);
        },

        async todo(parent, args, context, info) {
            return context.dataSources.todosDB.getTodo(args.id);
        },

        async incompleteTodos(parent, args, context, info) {
            return context.dataSources.todosDB.getIncompleteTodos();
        }
    }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    dataSources: () => {
        const todosAPI = new TodosAPI();
        todosAPI.setBaseURL(BASE_URL);

        const peopleAPI = new PeopleAPI();
        peopleAPI.setBaseURL(BASE_URL);

        const todosDB = new TodosDB(knexConfig);


        return {
            todosAPI,
            peopleAPI,
            todosDB
        };
    }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

