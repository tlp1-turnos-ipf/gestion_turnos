import { AuthUser } from "./context/AuthContext.jsx";
import { SocketProvider } from "./context/SocketProvider.jsx";
import { AppRouter } from "./routers/AppRouters.jsx";

function App() {
  return (
    <AuthUser>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </AuthUser>
  );
}

export default App;
