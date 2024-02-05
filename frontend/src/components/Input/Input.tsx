import { useState } from "react";
import * as S from "./Input.styles";
import Eye from "../../assets/Eye";

interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error: string | undefined;
  placeholder?: string;
  icon?: string | JSX.Element;
}

const Input = ({
  type,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  icon,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.Input
          type={type === "password" && showPassword ? "text" : type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        {icon === "string" ? <img src={icon} /> : icon}
        {type === "password" && (
          <S.EyeContainer onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <Eye /> : <Eye open />}
          </S.EyeContainer>
        )}
      </S.Wrapper>

      {error && <S.Error>{error}</S.Error>}
    </>
  );
};

export default Input;
