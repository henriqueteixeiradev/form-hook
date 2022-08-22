import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  border-radius: 5rem;
  background-color: #ea558dff;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 0.2rem solid #111111ff;

  &:hover {
    border: 0.2rem solid #ea558dff;
    box-shadow: 0 0 0 0.2rem #111111ff inset;
  }
`;
