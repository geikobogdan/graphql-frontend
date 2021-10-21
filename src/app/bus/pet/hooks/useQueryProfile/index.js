import { useLazyQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryPetById = loader("./gql/queryPetById.graphql");

export const useQueryProfile = () => {
  const [getProfile, { loading, error, data }] = useLazyQuery(queryPetById);
  const profile = data ? data.petById : null;
  return { getProfile, loading, error, profile };
};
