import {
  Container,
  Content,
  Modal,
  CartItems,
  ButtonContainer,
  StyledItems,
} from "./styles";

import { useContext } from "react";

import Link from "next/link";

import CartContext from "../../contexts/cart";

const Items = () => {
  return <StyledItems></StyledItems>;
};

export default function CartModal() {
  const [isOpen, setIsOpen, cart] = useContext(CartContext);

  if (isOpen)
    return (
      <Container isOpen={isOpen}>
        <Content isOpen={isOpen}>
          <Modal>
            <CartItems></CartItems>
            <ButtonContainer>
              <Link href="/checkout">
                <button onClick={() => setIsOpen(false)}>
                  Ir para o pagamento{" "}
                </button>
              </Link>
              <button onClick={() => setIsOpen(false)}>
                Continuar comprando
              </button>
              <button onClick={() => console.log(cart)}>
                Continuar comprando
              </button>
            </ButtonContainer>
          </Modal>
        </Content>
      </Container>
    );
  else return <Container></Container>;
}
