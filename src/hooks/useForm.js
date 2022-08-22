import { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[\w $*&@#]{8,}/,
    message: `
    Sua senha deve ao menos um número (1), uma letra minúscula (a), ao menos uma letra maiúscula (A), ao menos um caractere especial (@) e no mínimo 8 dos caracteres mencionados
    `,
  },
  phone: {
    regex: /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/,
    message: `Telefone inccorreto ex: (00) 90000-0000`,
  },
};

export const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Por favor preencha um valor.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
