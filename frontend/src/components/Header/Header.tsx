import * as S from "./Header.styles";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";
import Auth from "../Auth/Auth";
import useMedia from "../../hooks/useMedia";

const Header = () => {
  const media = useMedia("(max-width: 1200px)");

  return (
    <S.Container>
      <Logo />
      {media ? (
        <>
          <S.ContainerSize>
            <Menu />
            <Nav />
          </S.ContainerSize>
        </>
      ) : (
        <>
          <Menu />
          <Nav />
          <Auth />
        </>
      )}
    </S.Container>
  );
};

export default Header;
