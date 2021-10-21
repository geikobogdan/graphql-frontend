import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./init/modern";
import { User } from "./bus/user";
// import { client } from "./init/client";
// import { Pet } from "./bus/pet";
// import { Customer } from "./bus/customer";
// import { Login } from "./bus/customer/login";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <Login />
      <Pet /> */}
      {/* <Customer /> */}
      <User />
    </ApolloProvider>
  );
};
