import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? "" : "none")};
`;

export const Content = styled.div`
  display: ${({ isOpen }) => (isOpen ? "" : "none")};
  position: fixed;
  left: calc(50% - 200px);
  top: calc(50% - 300px);
  width: 100vw;
  height: 100vh;
`;

export const Modal = styled.div`
  background-color: ${({ isOpen }) => (isOpen ? "" : "#FFFFFF")};
  height: 600px;
  width: 400px;
  display: flex;
  flex-direction: column;

  button {
    font-family: Poppins;
    margin: 0 16px;
    cursor: pointer;
  }

  button:first-child {
    color: #fff;
    background-color: rgb(33, 32, 32);
    height: 40px;
    border: none;
  }

  button:last-child {
    height: 40px;
    background-color: #fff;
    border: none;
  }
`;

export const CartItems = styled.div`
  height: 75%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 25%;
  justify-content: center;
  flex-direction: column;
`;

export const StyledItems = styled.div``;
