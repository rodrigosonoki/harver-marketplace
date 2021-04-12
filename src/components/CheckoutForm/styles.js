import styled from "styled-components";

export const Container = styled.div`
  width: 400px;

  h1 {
    font-size: 16px;
  }

  input {
    margin-bottom: 16px;
    padding: 8px;

    ::placeholder {
      font-family: Poppins;
    }
  }
`;

export const ContactBox = styled.div`
  h1 {
    margin-bottom: 16px;
  }
`;

export const AddressBox = styled.div`
  h1 {
    margin-bottom: 16px;
  }
`;

export const FormField = styled.div`
  input {
    width: 100%;
    height: 40px;
    border: 1px solid #d8dae0;
    border-radius: 2px;
  }
`;
