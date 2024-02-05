import * as S from "./Menu.styles";
import { useMobile } from "../../context/MobileContext";
import useMedia from "../../hooks/useMedia";

const Menu = () => {
  const { mobile, setMobile } = useMobile();
  const media = useMedia("(max-width: 1200px)");

  function handleClick() {
    if (!mobile && media) {
      document.body.style.overflow = "hidden";
    }
    setMobile(!mobile);
  }

  return (
    <S.MenuContainer
      data-menu="button"
      onClick={handleClick}
      className={mobile ? "open" : ""}
    >
      <S.Checkbox type="checkbox" />
      <S.MenuLabel htmlFor="checkbox-menu" aria-label="Fechar e abrir o menu">
        <S.MenuLines />
        <S.MenuLines />
        <S.MenuLines />
      </S.MenuLabel>
    </S.MenuContainer>
  );
};

export default Menu;
