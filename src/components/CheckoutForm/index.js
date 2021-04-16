import { useState } from "react";

import {
  Container,
  Content,
  StyledLabel,
  StyledInput,
  InputBlock,
  PaymentOption,
  StyledPaymentInput,
  CreditCardField,
  RadioInput,
  RadioInputLabel,
  Button,
} from "./styles";

const Label = ({ labelText }) => {
  return <StyledLabel>{labelText}</StyledLabel>;
};

const Input = ({ inputText }) => {
  return <StyledInput placeholder={inputText} />;
};

const PaymentInput = ({ paymentInputText }) => {
  return (
    <StyledPaymentInput placeholder={paymentInputText}></StyledPaymentInput>
  );
};

export default function CheckoutForm() {
  const [isCreditCard, setIsCreditCard] = useState(true);
  const [paymentData, setPaymentData] = useState("");

  var buttonLabel = isCreditCard ? "Pagar" : "Gerar boleto";

  return (
    <Container>
      <Content>
        <Label labelText="Dados de contato" />
        <InputBlock>
          <Input inputText="Nome" />
          <Input inputText="Celular" />
          <Input inputText="CPF" />
        </InputBlock>
      </Content>

      <Content>
        <Label labelText="Dados de entrega" />
        <InputBlock>
          <Input inputText="CEP" />
          <Input inputText="Rua" />
          <div>
            <Input inputText="Número" />
            <Input inputText="Complemento" />
          </div>
          <Input inputText="Bairro" />
          <Input inputText="Cidade" />
          <Input inputText="Estado" />
        </InputBlock>
      </Content>

      <Content>
        <Label labelText="Dados de pagamento" />
        <PaymentOption>
          <RadioInputLabel>
            <RadioInput
              type="radio"
              name="payment-method"
              value="credit-card"
              defaultChecked={true}
              onClick={() => setIsCreditCard(true)}
            />
            <span>Cartão de crédito</span>
          </RadioInputLabel>
          <CreditCardField>
            <div>
              <PaymentInput paymentInputText="Número do cartão" />
            </div>
            <div>
              <PaymentInput paymentInputText="MM/AAAA" />
            </div>
            <div>
              <PaymentInput paymentInputText="CVV" />
            </div>
          </CreditCardField>
          <Input inputText="Nome do titular" />
        </PaymentOption>
        <PaymentOption>
          <RadioInputLabel>
            <RadioInput
              type="radio"
              name="payment-method"
              value="boleto"
              onClick={() => setIsCreditCard(false)}
            />
            <span>Boleto</span>
          </RadioInputLabel>
        </PaymentOption>
      </Content>
      <Button>{buttonLabel}</Button>
    </Container>
  );
}
