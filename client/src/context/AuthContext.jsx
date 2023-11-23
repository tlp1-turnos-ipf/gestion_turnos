import { useReducer, createContext, useEffect } from "react";
import { authReducer } from "../reducers/authReducers";
import { typeAuth } from "../types/type";

//HOOK: Funcion que centraliza la lógica de un componente y es reutilizable, descomprime la lógica. Se puede centralizar la lógica
//HUSTON HOOK
//El protocolo de socket es ws NO TE OLVIDESS

export const AuthContext = createContext(null);

export const AuthUser = ({ children }) => {
  //Obtiene el token si es que hay
  const token = localStorage.getItem("token") ?? null;

  //UseReducer para almacenar
  const [auth, dispatchAuth] = useReducer(authReducer, {
    isLogged: false,
    token,
    user: JSON.parse(localStorage.getItem("user")) ?? null,
  });

  //Verifica que si hay token, lo agregar al dispatch
  useEffect(() => {
    if (auth.token) {
      login(auth);
    }
  }, [auth]);

  //Para cambiar el estado del login
  const login = (data) => {
    dispatchAuth({
      type: typeAuth.LOGIN,
      payload: {
        data,
      },
    });
  };

  //Para salir del sistema
  const logout = () => {
    dispatchAuth({
      type: typeAuth.LOGOUT,
    });
  };

  // Obtiene el token de localStorage al cargar el componente
  const isAuth = () => {
    return token ?? null;
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
