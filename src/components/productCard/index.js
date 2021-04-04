import { StyledCard, TextArea, Title } from "./styles";

export default function ProductCard(props) {
  return (
    <StyledCard>
      {" "}
      <img src={props.img} alt="t-shirt" />
      <TextArea>
        <Title>
          <p>{props.name}</p>
          <span>{props.user}</span>
        </Title>
        <p>{props.price}</p>
      </TextArea>
    </StyledCard>
  );
}
