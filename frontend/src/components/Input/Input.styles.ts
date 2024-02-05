import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;

  &:focus-within,
  &:hover {
    path {
      fill: #f95e04;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 32px;
    transform: translate(-50%, -50%);

    path {
      transition: stroke 0.2s ease;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  font-family: "Poppins", sans-serif;
  padding: 16px 60px;
  border: 1px solid #ccc;
  border-radius: 0.54813rem;
  background-color: #f6f6f6;
  font-size: 16px;
  position: relative;

  &:focus,
  &:hover {
    border: 1.5px solid #f95e04;
    outline: none;
  }
`;

export const Error = styled.span`
  color: #f31;
  font-size: 0.875rem;
  margin: -12px 0 12px 0;
`;

export const EyeContainer = styled.span`
  position: absolute;
  top: 50%;
  right: 60px;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
