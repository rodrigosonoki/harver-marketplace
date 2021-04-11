import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const MainImage = styled.div`
  img {
    width: 560px;
  }
`;

export const MiniatureImages = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;

  img {
    width: 60px;
    cursor: pointer;
    margin-bottom: 8px;
    border-radius: 4px;

    &:hover {
      border: 1px solid tomato;
    }
  }
`;
