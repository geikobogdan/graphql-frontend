import React from "react";
import { useQueryUsers } from "./hooks/useQueryUsers";

export const Users = () => {
  const { getUsers, loading, error, users } = useQueryUsers();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log(users);
  const usersJSX =
    users &&
    users.map(({ name, email, password }, i) => (
      <p key={i}>
        <span>Name : {name}</span>
        <span>Email : {email}</span>
        <span>Password : {password}</span>
      </p>
    ));
  return (
    <>
      <button onClick={getUsers}>fetch User</button>
      {usersJSX}
    </>
  );
};
