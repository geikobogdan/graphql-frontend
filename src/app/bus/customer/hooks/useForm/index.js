import { useState } from "react";

export const useForm = (initialValues) => {
  const [form, setValues] = useState({
    ...initialValues,
  });

  const handleChange = (e) => {
    e.persist();
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return { handleChange, form };
};
