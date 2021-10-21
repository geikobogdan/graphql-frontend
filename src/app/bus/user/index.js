import React from "react";
import { Login } from "./login";
import { Registration } from "./registration";
import { Users } from "./users";

export const User = () => {
  return (
    <div>
      <Registration />
      <Login />
      <Users />
    </div>
  );
};
