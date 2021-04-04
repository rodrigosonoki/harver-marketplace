import styled from "styled-components";

export const StyledCard = styled.div`
  width: 320px;
  height: 400px;
  background-color: #fff;
  border-radius: 16px;
  -webkit-box-shadow: 1px 1px 10px 6px #888; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 1px 10px 6px #888; /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  flex-direction: column;

  img {
    height: 320px;
    width: 320px;
    border-radius: 16px 16px 0 0;
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 0 8px;
  height: 80px;

  p {
    font-weight: bold;
    font-family: Montserrat;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
  justify-content: center;

  p {
    margin: 0;
  }
`;
