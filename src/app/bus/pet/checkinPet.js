import React from "react";
import { useCheckin } from "../customer/hooks/useCheckin";

export const CheckinPet = () => {
  const { checkIn, pet, errors, error } = useCheckin();

  const petJSX = pet && (
    <>
      <p>Id: {pet.id}</p>
      <p>Name: {pet.name}</p>
    </>
  );
  const errorsJSX = errors && <p>Errors: {errors.name}</p>;
  const errorJSX = error && <p>Error: {error}</p>;
  return (
    <div>
      <h1>Checkin</h1>
      <button onClick={() => checkIn("C-1")}>Check</button>
      {petJSX}
      {errorsJSX}
      {errorJSX}
    </div>
  );
};
