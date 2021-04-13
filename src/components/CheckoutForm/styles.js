import styled from "styled-components";

export const Container = styled.div`
  width: 560px;
`;

export const Content = styled.div`
  border: solid 1px #d8dae0;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 16px;
`;

export const StyledInput = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: solid 1px #d8dae0;
  border-radius: 2px;
  height: 40px;
  width: 100%;

  ::placeholder {
    font-family: Poppins;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  div {
    display: flex;

    input:nth-child(1) {
      width: 20%;
      margin-right: 8px;
    }

    input:nth-child(2) {
      width: 80%;
    }
  }
`;

export const PaymentOption = styled.div``;

export const StyledPaymentInput = styled.input`
  border: 0;
  width: 100%;
  height: 100%;
  padding: 8px;
  font-family: Poppins;
`;

export const CreditCardField = styled.div`
  border: solid 1px #d8dae0;
  border-radius: 2px;
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 16px;

  div:first-child {
    width: 70%;
  }

  div:nth-child(2) {
    width: 20%;
  }

  div:nth-child(3) {
    width: 10%;
  }
`;

export const RadioInput = styled.input``;

export const RadioInputLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 16px;

  span {
    margin-left: 8px;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #32b259;
  border: none;
  border-radius: 2px;
  height: 64px;
  color: #fff;
  margin-top: 24px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;
