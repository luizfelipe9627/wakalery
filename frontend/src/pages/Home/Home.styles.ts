import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 90vw;
  margin: 78px auto 0 auto;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 18px;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #636363;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 68px 0 54px 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const AparecerMais = styled.button`
  font-family: "Poppins", sans-serif;
  margin: 0 auto;
  display: block;
  margin: -20px auto 54px auto;
  padding: 8px 18px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #f95e04;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #fc6e04;
  }
`;
