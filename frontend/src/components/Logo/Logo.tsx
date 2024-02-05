import { NavLink } from "react-router-dom";
import * as S from "./Logo.styles";

const Logo = () => {
  return (
    <S.Logo>
      <NavLink to="/">Wakalery</NavLink>
    </S.Logo>
  );
};

export default Logo;
