import { useState } from "react";
import { StyledButton, Container, Links } from "./styles";

export default function Button() {
  const [display, setDisplay] = useState("none");

  function toggleMenu() {
    if (display === "none") setDisplay("block");
    if (display === "block") setDisplay("none");
  }

  return (
    <>
      <Container>
        <StyledButton onClick={toggleMenu}>Clique aqui</StyledButton>
        <Links display={display}>
          <a href="#">Opção 1</a>
          <a href="#">Opção 2</a>
          <a href="#">Opção 3</a>
        </Links>
      </Container>
    </>
  );
}
