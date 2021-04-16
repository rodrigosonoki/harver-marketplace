import { useState } from "react";
import {
  Container,
  Content,
  Inputs,
  QtyInput,
  SizeInput,
  RadioInputBlock,
} from "./styles";

export default function ProductForm({ productDescription }) {
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [qtyError, setQtyError] = useState("");
  const [sizeError, setSizeError] = useState("");

  const handleOrder = () => {
    if (size == "") setSizeError("Selecione um tamanho.");
    if (qty < 1) setQtyError("Selecione uma quantidade válida");
  };

  return (
    <Container>
      <Content>
        <h1>Descrição</h1>
        <p>{productDescription}</p>

        <Inputs>
          <h1>Tamanho</h1>
          <SizeInput>
            <RadioInputBlock>
              <input
                id="size-s"
                type="radio"
                name="size"
                value="P"
                onClick={() => setSize("P")}
              />
              <label for="size-s">P</label>

              <input
                id="size-m"
                type="radio"
                name="size"
                value="M"
                onClick={() => setSize("M")}
              />
              <label for="size-m">M</label>

              <input
                id="size-g"
                type="radio"
                name="size"
                value="G"
                onClick={() => setSize("G")}
              />
              <label for="size-g">G</label>

              <input
                id="size-gg"
                type="radio"
                name="size"
                value="GG"
                onClick={() => setSize("GG")}
              />
              <label for="size-gg">GG</label>
            </RadioInputBlock>
            {sizeError && <p>{sizeError}</p>}
          </SizeInput>
        </Inputs>
        <Inputs>
          <h1>Quantidade</h1>
          <QtyInput>
            <input
              type="number"
              min="1"
              defaultValue="1"
              onChange={(e) => setQty(e.target.value)}
            ></input>
            {qtyError && <p>{qtyError}</p>}
          </QtyInput>
        </Inputs>
      </Content>
      <a href="http://localhost:3000/checkout">
        <button onClick={handleOrder}>Adicionar ao carrinho</button>
      </a>
    </Container>
  );
}
