import { Container, Title, Price } from "./styles";

import formatPrice from "../../helpers/formatPrice";

export default function ProductData(props) {
  return (
    <Container>
      <Title>
        <h1>{props.name}</h1>
        <p>{props.model}</p>
      </Title>
      <Price>
        <h1>{formatPrice(props.price)}</h1>
      </Price>
    </Container>
  );
}
