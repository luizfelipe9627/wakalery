import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useMobile } from "../../context/MobileContext";
import * as S from "./Auth.styles";
import useMedia from "../../hooks/useMedia";

const Auth = () => {
  const { mobile, setMobile } = useMobile();
  const { token, removeToken, user, setUser } = useAuth();
  const navigate = useNavigate();
  const media = useMedia("(max-width: 1200px)");

  function handleLogout() {
    navigate("/login");
    removeToken();
    setUser(null);
  }

  function handleClick() {
    if (!mobile && media) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setMobile(!mobile);
  }

  return (
    <S.Auth>
      {token ? (
        <>
          <p>{user?.username}</p>
          <S.Button onClick={handleLogout}>
            {token ? (
              <a onClick={handleClick}>Logout</a>
            ) : (
              <NavLink to="/register" onClick={handleClick}>
                Registrar-se
              </NavLink>
            )}
          </S.Button>
        </>
      ) : (
        <>
          <NavLink to="/login" onClick={handleClick}>
            Login
          </NavLink>
          <S.Button>
            <NavLink to="/register" onClick={handleClick}>
              Registrar-se
            </NavLink>
          </S.Button>
        </>
      )}
    </S.Auth>
  );
};

export default Auth;
