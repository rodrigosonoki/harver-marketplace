import Header from "../../components/Header";

import CheckoutForm from "../../components/CheckoutForm";

import { Container } from "./styles";

export default function Checkout() {
  return (
    <>
      <Container>
        <Header />
        <CheckoutForm />
      </Container>
    </>
  );
}
