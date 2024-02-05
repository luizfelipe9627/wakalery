import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90vw;
  margin: 32px auto;
`;

export const ContainerSize = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    position: relative;
  }
`;
