import * as S from "./Nav.styles";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Lock from "../../assets/Lock";
import { useMobile } from "../../context/MobileContext";
import useMedia from "../../hooks/useMedia";
import Auth from "../Auth/Auth";

const Nav = () => {
  const { tokenBoolean } = useAuth();
  const { mobile, setMobile } = useMobile();
  const media = useMedia("(max-width: 1200px)");

  function handleClick() {
    if (!mobile && media) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setMobile(!mobile);
  }

  return (
    <S.Container className={mobile ? "open" : ""}>
      <S.List>
        <S.ListItem>
          <NavLink to="/" onClick={handleClick}>
            Início
          </NavLink>
        </S.ListItem>
        <S.ListItem>
          <NavLink
            className={tokenBoolean ? "" : "private"}
            to="/community"
            onClick={handleClick}
          >
            Comunidade
            {!tokenBoolean && <Lock />}
          </NavLink>
        </S.ListItem>
        <S.ListItem>
          <NavLink
            className={tokenBoolean ? "" : "private"}
            to="/discoveries"
            onClick={handleClick}
          >
            Descobertas
            {!tokenBoolean && <Lock />}
          </NavLink>
        </S.ListItem>
        <S.ListItem>
          <NavLink
            className={tokenBoolean ? "" : "private"}
            to="/statistics"
            onClick={handleClick}
          >
            Estatísticas
            {!tokenBoolean && <Lock />}
          </NavLink>
        </S.ListItem>
      </S.List>

      {media && <Auth />}
    </S.Container>
  );
};

export default Nav;
