import { useState } from "react";
import { Container, FormField, ContactBox, AddressBox } from "./styles";

export default function CheckoutForm() {
  /*   const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
 */

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");

  const searchCEP = async () => {
    const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
    const data = await response.json();
    setAddress(data);
  };

  return (
    <>
      <Container>
        <ContactBox>
          <h1>Dados de contato</h1>
          <FormField>
            <input placeholder="Nome" />
          </FormField>
          <FormField>
            <input placeholder="Celular" />
          </FormField>
          <FormField>
            <input placeholder="CPF" />
          </FormField>
        </ContactBox>
        <AddressBox>
          <h1>Dados de entrega</h1>
          <FormField>
            <input
              placeholder="CEP"
              onChange={(e) => setCep(e.target.value)}
              onBlur={searchCEP}
            />
          </FormField>
          <FormField>
            <input
              placeholder="Rua/Avenida/Alameda"
              defaultValue={address.street}
            />
          </FormField>
          <FormField>
            <input placeholder="Número" />
          </FormField>
          <FormField>
            <input placeholder="Complemento" />
          </FormField>
          <FormField>
            <input placeholder="Bairro" defaultValue={address.neighborhood} />
          </FormField>
          <FormField>
            <input placeholder="Cidade" defaultValue={address.city} />
          </FormField>
          <FormField>
            <input placeholder="Estado" defaultValue={address.state} />
          </FormField>
        </AddressBox>
      </Container>
    </>
  );
}
