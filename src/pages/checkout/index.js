import CheckoutForm from "../../components/CheckoutForm";
import Header from "../../components/Header";

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
