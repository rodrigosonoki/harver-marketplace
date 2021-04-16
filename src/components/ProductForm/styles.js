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
    background-color: #d93d3d;
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
  flex-direction: column;
  margin-top: 16px;

  p {
    color: tomato;
  }

  h1 {
    margin-bottom: 8px;
  }
`;

export const RadioInputBlock = styled.div`
  display: flex;
`;

export const SizeInput = styled.div`
  height: 80px;

  label {
    display: flex;
    background-color: #fff;
    height: 48px;
    width: 48px;
    font-size: 16px;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    margin-right: 8px;
    justify-content: center;
    align-items: center;
  }

  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  input[type="radio"]:checked + label {
    background-color: #000;
    color: #fff;
  }

  label:hover {
    border: 1px solid #000;
  }
`;

export const QtyInput = styled.div`
  height: 80px;
`;
