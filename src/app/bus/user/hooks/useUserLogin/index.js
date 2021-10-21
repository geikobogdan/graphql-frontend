import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { useForm } from "../../../../hooks/useForm";

const mutationLogIn = loader("./gql/mutationLogin.graphql");
export const useUserLogin = () => {
  const [_logIn, { data }] = useMutation(mutationLogIn);
  const { form, handleChange } = useForm({
    name: "",
    password: "",
  });

  const authorizedUser = data && data.login;

  const logIn = () => {
    _logIn({ variables: form });
    // console.log(form);
  };

  return {
    logIn,
    handleChange,
    authorizedUser,
  };
};
