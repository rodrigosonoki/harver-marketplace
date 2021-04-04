import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-gap: 24px;
  width: 1008px;
`;

export const Section = styled.div`
  height: 240px;
`;
