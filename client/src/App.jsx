import { AuthUser } from "./context/AuthContext.jsx";
import { ContextEspeciality } from "./context/EspecilityContext.jsx";
import { ContextPatient } from "./context/PatientContext.jsx";
import { ContextDoctor } from "./context/DoctorContext.jsx";
import { SocketProvider } from "./context/SocketProvider.jsx";
import { AppRouter } from "./routers/AppRouters.jsx";

function App() {
  return (
    <AuthUser>
      <SocketProvider>
        <ContextPatient>
          <ContextDoctor>
            <ContextEspeciality>
              <AppRouter />
            </ContextEspeciality>
          </ContextDoctor>
        </ContextPatient>
      </SocketProvider>
    </AuthUser>
  );
}

export default App;
