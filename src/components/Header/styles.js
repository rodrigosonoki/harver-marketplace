import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  position: fixed;
  border-bottom: 1px solid #c9c9c9;
  z-index: 9999;
  padding: 0 16px;
  margin-bottom: 80px;
  background: #fff;

  @media only screen and (max-width: 680px) {
    height: 64px;
    /* <--FULL SCREEN--> */
    background-color: ${({ isVisible }) => (isVisible ? "" : "#f17174")};
    justify-content: ${({ isVisible }) => (isVisible ? "" : "center")};
    width: ${({ isVisible }) => (isVisible ? "" : "100vw")};
    height: ${({ isVisible }) => (isVisible ? "" : "100vh")};
    top: ${({ isVisible }) => (isVisible ? "" : "0")};
    left: ${({ isVisible }) => (isVisible ? "" : "0")};
  }
`;

export const LogoContainer = styled.div`
  height: 48px;
  width: 48px;

  @media only screen and (max-width: 680px) {
    display: ${({ isVisible }) => (isVisible ? "" : "none")};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  ul {
    list-style: none;
    color: #414960;
    display: flex;
    text-transform: uppercase;
    font-family: Poppins;
    font-weight: bold;
    justify-content: space-between;
    width: 100%;
  }

  ul li {
    padding: 20px;
  }

  ul a {
    text-decoration: none;
    color: #303030;
  }

  @media only screen and (max-width: 680px) {
    /* <--FULL SCREEN--> */
    display: ${({ isVisible }) => (isVisible ? "none" : "block")};
    z-index: ${({ isVisible }) => (isVisible ? "" : "9999")};
    text-align: ${({ isVisible }) => (isVisible ? "" : "center")};

    ul {
      display: ${({ isVisible }) => (isVisible ? "" : "flex")};
      flex-direction: ${({ isVisible }) => (isVisible ? "" : "column")};
      font-size: ${({ isVisible }) => (isVisible ? "" : "32px")};
    }

    ul a {
      color: ${({ isVisible }) => (isVisible ? "" : "#fff")};
    }
  }
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 80px;
  transition: 0.2s;

  @media only screen and (max-width: 680px) {
    height: 64px;
    transition: 0.2s;
  }
`;

export const ResponsiveMenu = styled.div`
  @media (max-width: 680px) {
    width: 40px;
    height: 30px;
    float: right;
    position: ${({ isVisible }) => (isVisible ? "" : "absolute")};
    right: ${({ isVisible }) => (isVisible ? "" : "30px")};
    top: ${({ isVisible }) => (isVisible ? "" : "18px")};

    div:nth-child(1) {
      background-color: ${({ isVisible }) => (isVisible ? "#303030" : "#fff")};
      height: 5px;
      width: 100%;
      margin: 0 auto 6px;
      transition-duration: 0.3s;
      border-radius: 8px;
      transform: ${({ isVisible }) =>
        isVisible ? "" : "rotate(45deg) translate(7px, 7px)"};
    }

    div:nth-child(2) {
      background-color: #303030;
      height: 5px;
      border-radius: 8px;
      width: 100%;
      margin: 0 auto 6px;
      transition-duration: 0.3s;
      opacity: ${({ isVisible }) => (isVisible ? "" : "0")};
    }

    div:nth-child(3) {
      background-color: ${({ isVisible }) => (isVisible ? "#303030" : "#fff")};
      height: 5px;
      border-radius: 8px;
      width: 100%;
      margin: 0 auto 6px;
      transition-duration: 0.3s;
      transform: ${({ isVisible }) =>
        isVisible ? "" : "rotate(-45deg) translate(8px, -9px)"};
    }
  }
`;
