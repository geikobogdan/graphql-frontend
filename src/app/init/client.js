import { ApolloClient, InMemoryCache, split } from "@apollo/client";
// import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";

const root = "funded-pet-library.moonhighway.com";

const uri = `https://${root}`; // https://48p1r2roz4.sse.codesandbox.io
const httpLink = createHttpLink({ uri });

const wsLink = new WebSocketLink({
  uri: `wss://${root}/graphql`,
  options: {
    reconnect: true,
  },
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const wrappedHttpLink = authLink.concat(httpLink);

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  wrappedHttpLink
);

const cache = new InMemoryCache();
export const client = new ApolloClient({
  link,
  cache,
});
