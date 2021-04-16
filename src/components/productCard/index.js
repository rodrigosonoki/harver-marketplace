import {
  Container,
  Content,
  ImageContainer,
  DescriptionContainer,
} from "./styles";

export default function ProductCard(props) {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={props.img} width={300} height={300} />
        </ImageContainer>
        <DescriptionContainer>
          <p>{props.name}</p>
          <p>{props.user}</p>
          <p>{props.price}</p>
        </DescriptionContainer>
      </Content>
    </Container>
  );
}
