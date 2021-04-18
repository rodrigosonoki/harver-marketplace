import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Container,
  LogoContainer,
  ButtonContainer,
  BackgroundContainer,
  ResponsiveMenu,
} from "./styles";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  function toggleMenu() {
    setIsVisible(!isVisible);
    if (isVisible && window.innerWidth <= 680)
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "initial";
  }
  return (
    <div>
      <Container isVisible={isVisible}>
        <LogoContainer isVisible={isVisible}>
          <Link href="/">
            <img
              src="https://www.harver.com.br/static/logo-917eb2010144d2a1cd0a2072b4d41ea3.png"
              alt="brand-logo"
              height="48px"
            />
          </Link>
        </LogoContainer>
        <ResponsiveMenu isVisible={isVisible} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </ResponsiveMenu>
        <ButtonContainer isVisible={isVisible}>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/static/images/shopping-bag.svg"
                  height={24}
                  width={24}
                />
              </a>
            </li>
          </ul>
        </ButtonContainer>
      </Container>
      <BackgroundContainer />
    </div>
  );
}
