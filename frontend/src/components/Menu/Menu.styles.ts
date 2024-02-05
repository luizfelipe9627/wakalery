import styled from "styled-components";

export const MenuContainer = styled.div`
  display: none;
  @media (max-width: 1200px) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;

    &.open {
      transform: rotate(90deg);
    }
  }
`;

export const Checkbox = styled.input`
  @media (max-width: 1200px) {
    position: absolute;
    display: none;
  }
`;

export const MenuLabel = styled.label`
  @media (max-width: 1200px) {
    position: relative;
    display: block;
    height: 1.25rem;
    width: 1.5625rem;
  }
`;

export const MenuLines = styled.span`
  @media (max-width: 1200px) {
    position: absolute;
    display: block;
    height: 0.3125rem;
    width: 100%;
    background-color: #fc6e04;
    border-radius: 1.875rem;
    transition: 0.25s ease-in-out;
    cursor: pointer;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 0.5rem;
    }

    &:nth-child(3) {
      top: 1rem;
    }
  }
`;
