import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > label {
    color: #ffffff;
  }

  & > p {
    color: red;
    font-size: 1.2rem;
    max-width: 24rem;
  }
`;
export const Input = styled.input`
  display: flex;
  align-items: center;
  padding: 0.8rem 2rem;
  width: 24rem;
  border-radius: 0.8rem;
  outline-color: #ea558dff;
  font-size: 1.6rem;
`;
