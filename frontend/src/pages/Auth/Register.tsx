import React from "react";
import register from "../../assets/register.webp";
import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./Auth.styles";
import Input from "../../components/Input/Input";
import Email from "../../assets/Email";
import Password from "../../assets/Password";
import Username from "../../assets/Username";
import { api } from "../../services/Api";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorGlobal, setErrorGlobal] = React.useState("");
  const [timeoutId, setTimeoutId] = React.useState<number | null>(null);
  const navigate = useNavigate();
  const { removeToken } = useAuth();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);

    try {
      await api.post("/register", {
        username,
        email,
        password,
      });
      removeToken();
      navigate("/login");
    } catch (error: any) {
      if (!username || !email || !password) {
        setError(error.response.data.error.replace(/^"(.*)"$/, "$1"));
      }

      if (error.response.status === 400 && email && password && username) {
        setErrorGlobal(error.response.data.error.replace(/^"(.*)"$/, "$1"));
      }

      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        setErrorGlobal("");
      }, 3000);

      setTimeoutId(newTimeoutId);
    }

    setLoading(false);
  }

  return (
    <S.Container>
      <S.Auth>
        <div>
          <S.Title>Crie sua conta</S.Title>
          <S.Subtitle>
            Desbrave o Mundo da Natureza registrando-se conosco. Junte-se à
            nossa comunidade e embarque em uma jornada única de descobertas.
          </S.Subtitle>

          <S.Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              onBlur={({ target }) => setUsername(target.value)}
              placeholder="Usuário"
              error={!username ? error : ""}
              icon={<Username />}
            />
            <Input
              type="text"
              name="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              onBlur={({ target }) => setEmail(target.value)}
              placeholder="Email"
              error={!email ? error : ""}
              icon={<Email />}
            />
            <Input
              type="password"
              name="password"
              value={password ? password : ""}
              onChange={({ target }) => setPassword(target.value)}
              onBlur={({ target }) => setPassword(target.value)}
              placeholder="Senha"
              error={!password ? error : ""}
              icon={<Password />}
            />

            {errorGlobal && <S.Error>{errorGlobal}</S.Error>}

            <S.Button type="submit" disabled={loading ? true : false}>
              {loading ? "Carregando..." : "Entrar"}
            </S.Button>
          </S.Form>

          <S.Account>
            Já tem uma conta? <NavLink to="/login">Entrar</NavLink>
          </S.Account>
        </div>
      </S.Auth>

      <S.Background>
        <img src={register} alt="Paisagem" />
      </S.Background>
    </S.Container>
  );
};

export default Register;
