import MenuLabel from "../../atoms/menuLabel";
import InputValueMenu from "../../atoms/inputValueMenu";

export default function QtyMenu({ text }) {
  return (
    <>
      <MenuLabel text={text} />
      <InputValueMenu />
    </>
  );
}
