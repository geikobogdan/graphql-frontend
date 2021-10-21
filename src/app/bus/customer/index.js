import React from "react";
import { useCustomerCreator } from "./hooks/useCustomerCreator";

export const Customer = () => {
  const { createdAccount, save, handleChange } = useCustomerCreator();

  const customerJSX = createdAccount && <p>Name : {createdAccount.name}</p>;
  return (
    <>
      {customerJSX}
      <h1>Registration: </h1>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <button type="submit" onClick={save}>
        Save
      </button>
    </>
  );
};
