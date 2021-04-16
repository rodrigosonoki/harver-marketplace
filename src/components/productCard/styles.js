import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const ImageContainer = styled.div``;

export const DescriptionContainer = styled.div`
  p:first-child {
    font-weight: bold;
    font-size: 18px;
  }

  p:nth-child(2) {
    margin-bottom: 8px;
    font-weight: 300;
  }

  p:last-child {
    font-weight: bold;
    font-size: 14px;
  }
`;
