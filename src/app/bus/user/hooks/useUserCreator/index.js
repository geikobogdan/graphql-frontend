import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { useForm } from "../../../../hooks/useForm";

export const useUserCreator = () => {
  const mutationCreateUser = loader("./gql/mutationCreateUser.graphql");

  const [_save, { data }] = useMutation(mutationCreateUser);
  const { form, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const save = () => {
    // console.log(form);
    _save({ variables: { ...form } });
  };

  return {
    form,
    handleChange,
    save,
    createdUser: data && data.signUp,
  };
};
