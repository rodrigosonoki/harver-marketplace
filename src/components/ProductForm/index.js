import { useState } from "react";
import { Container, Content, Inputs, QtyInput, SizeInput } from "./styles";

export default function ProductForm() {
  const [size, setSize] = useState("P");
  const [qty, setQty] = useState(1);

  function onSubmit() {
    console.log(size, qty);
  }

  return (
    <Container>
      <Content>
        <h1>Descrição</h1>
        <p>Rodrgifoodododo</p>

        <Inputs>
          <SizeInput>
            <h1>Tamanho</h1>
            <select onChange={(e) => setSize(e.target.value)}>
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
            </select>
          </SizeInput>
          <QtyInput>
            <h1>Quantidade</h1>
            <input
              type="number"
              min="1"
              defaultValue="1"
              onChange={(e) => setQty(e.target.value)}
            ></input>
          </QtyInput>
        </Inputs>
      </Content>
      <button onClick={onSubmit}>Adicionar ao carrinho</button>
    </Container>
  );
}
