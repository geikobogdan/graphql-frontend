import React from "react";
import { usePetReturned } from "./hooks/usePetReturned";
export const PetReturned = () => {
  const { pet, errors } = usePetReturned();
  // console.log(pet);
  const petJSX = pet && (
    <>
      <p>Id: {pet.id}</p>
      <p>Name: {pet.name}</p>
    </>
  );
  const errorsJSX = errors && <p>Errors: {errors.name}</p>;

  return (
    <>
      <h1>Pet Returned</h1>
      {petJSX}
      {errorsJSX}
    </>
  );
};
