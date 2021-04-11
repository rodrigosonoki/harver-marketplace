import styled from "styled-components";

export const Container = styled.div`
  width: 480px;
  background-color: #f6f6f9;

  h1 {
    font-size: 16px;
    font-weight: bold;
  }

  input {
    width: 72px;
    height: 40px;
    border: 1px solid #d8dae0;
    padding: 0 8px;
  }

  select {
    width: 72px;
    height: 40px;
    border: 1px solid #d8dae0;
    padding: 8px;
  }

  button {
    height: 56px;
    width: 100%;
    line-height: 24px;
    font-size: 16px;
    text-align: center;
    justify-content: center;
    border: none;
    background-color: rgb(254, 81, 123);
    color: #fff;
    cursor: pointer;
    margin-top: 24px;
  }
`;

export const Content = styled.div`
  padding: 24px 16px 0 16px;
`;

export const Inputs = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const SizeInput = styled.div``;

export const QtyInput = styled.div`
  margin-left: 16px;
`;
