import { AuthUser } from "./context/AuthContext.jsx";
import { AppRouter } from "./routers/AppRouters.jsx";

function App() {
  return (
    <AuthUser>
      <AppRouter />
    </AuthUser>
  );
}

export default App;
