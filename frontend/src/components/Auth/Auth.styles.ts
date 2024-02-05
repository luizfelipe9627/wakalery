import styled from "styled-components";

export const Auth = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: space-between;
  }

  a {
    &.active {
      color: #000;
      font-weight: 700;
    }

    @media (max-width: 1200px) {
      font-size: 1.4rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  font-family: "Poppins", sans-serif;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  a {
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    padding: 8px 30px;
    border-radius: 0.25rem;
    background: #fc6e04;

    @media (max-width: 1200px) {
      font-size: 1.4rem;
      padding: 0.75rem 2.5rem;
    }

    &.active {
      background-color: #f95e04;
      color: #000;
      font-weight: 700;
    }

    &:hover {
      background-color: #f95e04;
    }
  }
`;
