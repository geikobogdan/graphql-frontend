import React from "react";
import { CheckinPet } from "./checkinPet";
// import { Counter } from "./counter";
// import { List } from "./list";
import { PetReturned } from "./petReturned";
// import { Profile } from "./profile";
// import { SpecialList } from "./specialList";

export const Pet = () => {
  return (
    <>
      <h1>Pet</h1>
      <CheckinPet />
      <PetReturned />
      {/* <Counter />
      <List />
      <SpecialList />
      <Profile /> */}
    </>
  );
};
