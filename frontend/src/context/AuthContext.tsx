import React from "react";
import { api } from "../services/Api";

interface AuthContextData {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  token: string;
  updateToken: (token: string) => void;
  removeToken: () => void;
  tokenBoolean: boolean;
  setTokenBoolean: (token: boolean) => void;
}

export const AuthContext = React.createContext<AuthContextData | null>(null);

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = React.useState<UserData | null>(null);
  const [token, setToken] = React.useState(() => {
    const token = localStorage.getItem("token");
    return token || "";
  });
  const [tokenBoolean, setTokenBoolean] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const responseUser = await api.post("/auth", { token });
          const fetchedUser = responseUser.data[0];
          setUser(fetchedUser);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();

    if (token) {
      setTokenBoolean(true);
    } else {
      setTokenBoolean(false);
    }
  }, [token]);

  const updateToken = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        updateToken,
        removeToken,
        tokenBoolean,
        setTokenBoolean,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
