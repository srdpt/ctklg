import { ApolloServer, gql } from "apollo-server";

import { createContext } from "./context";

import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext(),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
