// // npm packages
// const express = require('express');
// const next = require('next');
// const { ApolloServer, gql } = require('apollo-server-express');

// // next.js setup
// const port = process.env.PORT || 3000;
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// // Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// // Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!',
//   },
// };

// app
//   .prepare()
//   .then(() => {
//     const server = express();

//     server.get('/api/graphql', (req, res) => {
//       return res.end('YEESSSS!');
//     });

//     server.all('*', (req, res) => {
//       return handle(req, res);
//     });

//     server.listen(port, (err) => {
//       if (err) throw err;
//       console.log(`> Ready on ${port}`);
//     });
//   })
//   .catch((ex) => {
//     console.error(ex.stack);
//     process.exit(1);
//   });
