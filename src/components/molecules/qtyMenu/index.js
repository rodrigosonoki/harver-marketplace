import MenuLabel from "../../atoms/menuLabel";
import SelectMenu from "../../atoms/selectMenu";

export default function QtyMenu({ text }) {
  return (
    <>
      <MenuLabel text={text} />
      <SelectMenu />
    </>
  );
}
