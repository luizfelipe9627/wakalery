import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 100vh;
`;

export const Background = styled.div`
  width: 60%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 0 32px;

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: left;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 4px;
    background-color: #f95e04;
    bottom: -2px;
    left: 0;
    border-radius: 2px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 32px;
  color: #636363;
  max-width: 40ch;
  text-align: left;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 0.54813rem;
  background-color: #f95e04;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: #ffa07a;
  }

  &:hover:not(:disabled) {
    background-color: #fc6e04;
  }
`;

export const Account = styled.p`
  margin-top: 24px;
  font-size: 16px;
  font-weight: 400;
  color: #636363;
  text-align: center;

  a {
    color: #f95e04;
    text-decoration: none;
    transition: text-decoration 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Error = styled.span`
  color: #f31;
  font-size: 16px;
  margin-bottom: 12px;
  text-align: right;
`;
