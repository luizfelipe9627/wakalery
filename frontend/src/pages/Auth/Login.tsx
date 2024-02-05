import React from "react";
import login from "../../assets/login.webp";
import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./Auth.styles";
import Input from "../../components/Input/Input";
import Password from "../../assets/Password";
import { api } from "../../services/Api";
import { useAuth } from "../../context/AuthContext";
import Username from "../../assets/Username";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorGlobal, setErrorGlobal] = React.useState("");
  const [timeoutId, setTimeoutId] = React.useState<number | null>(null);
  const navigate = useNavigate();
  const { updateToken, removeToken, setUser } = useAuth();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);

    try {
      const responseLogin = await api.post("/login", { username, password });
      const token = responseLogin.data[0].token;

      const responseUser = await api.post("/token", { token });
      const user = responseUser.data[0];
      setUser(user);

      if (token) {
        updateToken(token);
        navigate("/");
      } else if (responseLogin.data.error === "Token inválido ou expirado.") {
        removeToken();
      }
    } catch (error: any) {
      if (!username || !password) {
        setError(error.response.data.error.replace(/^"(.*)"$/, "$1"));
      }

      if (error.response.status === 400 && username && password) {
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
      <S.Background>
        <img src={login} alt="Paisagem" />
      </S.Background>

      <S.Auth>
        <div>
          <S.Title>Acesse sua Conta</S.Title>
          <S.Subtitle>
            Explore o Mundo da Natureza ao fazer login. Seja parte da nossa
            comunidade e continue sua jornada de descobertas.
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
              type="password"
              name="password"
              value={password}
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
            Não possui uma conta? <NavLink to="/register">Cadastre-se</NavLink>
          </S.Account>
        </div>
      </S.Auth>
    </S.Container>
  );
};

export default Login;
