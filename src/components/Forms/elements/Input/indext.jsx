import React from "react";

import * as S from "./styled";

export function Input({
  label,
  type,
  name,
  value,
  setValue,
  onChange,
  onBlur,
  error,
}) {
  return (
    <S.InputWrapper>
      <label htmlFor={name}>{label}</label>
      <S.Input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </S.InputWrapper>
  );
}
