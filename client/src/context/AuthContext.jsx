import { useReducer, createContext, useEffect } from "react";
import { authReducer } from "../reducers/authReducers";
import { typeAuth } from "../types/type";

export const AuthContext = createContext(null);

export const AuthUser = ({ children }) => {
  const [auth, dispatchAuth] = useReducer(authReducer, { isLogged: false });
  console.log("AUTHHH: ", auth);

  // Obtiene el token de localStorage al cargar el componente

  return (
    <AuthContext.Provider
      value={{
        auth,
        dispatchAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
