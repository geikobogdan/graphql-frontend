import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { useState } from "react";

export const useCheckin = () => {
  const mutationCheckin = loader("./gql/mutationCheckin.graphql");

  const [_checkIn, { data, errors }] = useMutation(mutationCheckin);

  const [error, setError] = useState(false);

  const checkIn = async (id) => {
    try {
      await _checkIn({
        variables: {
          id,
        },
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const pet = data && data.checkIn.pet;

  return { checkIn, pet, errors, error };
};
