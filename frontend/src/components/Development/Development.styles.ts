import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 106px);
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 54px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 28px;
  max-width: 32ch;
  color: #333;
  text-align: center;
`;

export const Detail = styled.span`
  color: #f95e04;
  position: relative;
  padding: 0 5px;
  border-radius: 5px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0),
      #f95e04,
      rgba(255, 255, 255, 0)
    );
    opacity: 1;
    z-index: -1;
  }
`;
