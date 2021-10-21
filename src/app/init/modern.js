import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";

const uri = `http://localhost:4000/`;
const link = createHttpLink({ uri, credentials: "include" });

const cache = new InMemoryCache();
export const client = new ApolloClient({
  link,
  cache,
});
