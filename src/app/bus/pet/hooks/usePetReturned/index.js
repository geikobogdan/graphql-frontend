import { useSubscription } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const subscriptionPetReturned = loader("./gql/subscriptionPetReturned.graphql");

export const usePetReturned = () => {
  const { loading, error, data } = useSubscription(subscriptionPetReturned);

  const pet = data ? data.petReturned.pet : null;
  return {
    loading,
    error,
    pet,
  };
};
