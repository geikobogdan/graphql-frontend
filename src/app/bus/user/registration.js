import { React } from "react";
import { useUserCreator } from "./hooks/useUserCreator";

export const Registration = () => {
  const { handleChange, save, createdUser } = useUserCreator();

  const userJSX = createdUser && (
    <>
      <p>Name: {createdUser.name}</p>
      <p>Email: {createdUser.email}</p>
    </>
  );
  return (
    <>
      {userJSX}
      <h1>Registration: </h1>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
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
