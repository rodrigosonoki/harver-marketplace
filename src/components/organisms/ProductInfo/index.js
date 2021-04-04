import QtyMenu from "../../molecules/qtyMenu";
import SizeMenu from "../../molecules/sizeMenu";
import Button from "../../atoms/button";

export default function ProductInfo() {
  return (
    <>
      <QtyMenu text="Quantidade" />
      <SizeMenu text="Tamanho" />
      <Button text="Adicionar Ao Carrinho" />
    </>
  );
}
