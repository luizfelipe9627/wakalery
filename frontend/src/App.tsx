import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/Global.styles";
import Header from "./components/Header/Header";
import AppRoutes from "./routes";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./global/PrivateRoute";
import MobileProvider from "./context/MobileContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthProvider>
        <PrivateRoute>
          <MobileProvider>
            <Header />
          </MobileProvider>
          <main>
            <AppRoutes />
          </main>
        </PrivateRoute>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
