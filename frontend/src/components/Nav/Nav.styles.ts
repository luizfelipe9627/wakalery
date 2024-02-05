import styled, { keyframes } from "styled-components";

const expandWidth = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100dvh - 100px);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.9);
    opacity: 0;
    transition: 0.25s ease-in-out;
    z-index: 1;
    border-top: 0.125rem solid #fc6e04;
    pointer-events: none;

    &.open {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 4.5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.5rem;
    align-items: center;
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 4.5rem;

  a {
    font-size: 1rem;
    font-weight: 400;
    transition: all 0.2s ease-in-out;

    @media (max-width: 1200px) {
      font-size: 1.4rem;
    }

    &.private {
      display: flex;
      align-items: center;
      &:not(.public) {
        pointer-events: none;
        color: #d3d3d3;
        gap: 8px;

        @media (max-width: 1200px) {
          color: #737373;
        }

        &:hover {
          &:after {
            display: none;
          }
        }
      }
    }

    &.active {
      color: #fc6e04;
      font-weight: 700;

      &:hover {
        position: relative;
        &::after {
          position: absolute;
          content: "";
          display: block;
          height: 2px;
          width: 0;
          background-color: #fc6e04;
          transition: width 0.3s ease-in-out;
          animation: ${expandWidth} 1s ease-in-out forwards;
          border-radius: 2px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      }
    }

    &:hover {
      position: relative;
      &::after {
        position: absolute;
        content: "";
        display: block;
        height: 2px;
        width: 0;
        background-color: #000;
        transition: width 0.3s ease-in-out;
        animation: ${expandWidth} 1s ease-in-out forwards;
        border-radius: 2px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
