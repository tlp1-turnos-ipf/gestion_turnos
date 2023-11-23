import { AuthUser } from "./context/AuthContext.jsx";
import { ContextPatient } from "./context/PatientContext.jsx";
import { SocketProvider } from "./context/SocketProvider.jsx";
import { AppRouter } from "./routers/AppRouters.jsx";

function App() {
  return (
    <AuthUser>
      <SocketProvider>
        <ContextPatient>
          <AppRouter />
        </ContextPatient>
      </SocketProvider>
    </AuthUser>
  );
}

export default App;
