import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { useForm } from "../useForm";

export const useCustomerCreator = () => {
  const mutationCreateAccount = loader("./gql/mutationCreateAccount.graphql");

  const [addUser, { data }] = useMutation(mutationCreateAccount);
  const { form, handleChange } = useForm({
    name: "",
    username: "",
    password: "",
  });

  const save = () => {
    console.log(form);
    addUser({ variables: { form } });
  };

  return {
    form,
    handleChange,
    save,
    createdAccount: data && data.createAccount,
  };
};
