import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #2980b9;
  }
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Links = styled.div`
  display: ${(props) => props.display};
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  a:hover {
    background-color: #ddd;
  }
`;
