import React from "react";

import * as S from "./styled";

import { Button } from "./elements/Button";
import { Input } from "./elements/Input/indext";
import { useForm } from "../../hooks/useForm";

export function Forms() {
  const email = useForm();
  const password = useForm();
  const phone = useForm();

  function handleSubmit(e) {
    e.preventDefault();

    if (email.validate() && password.validate() & phone.validate()) {
      alert("Tudo Certo");
    } else {
      alert("Você precisa preencher todos os campos!");
    }
  }

  return (
    <S.Section>
      <h1>Formulário</h1>
      <S.Form onSubmit={handleSubmit}>
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Input label="phone" type="phone" name="phone" {...phone} />
        <Button type="submit" label="Enviar" />
      </S.Form>
    </S.Section>
  );
}
