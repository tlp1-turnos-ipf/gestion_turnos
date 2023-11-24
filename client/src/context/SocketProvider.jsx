import { createContext, useContext, useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { auth } = useContext(AuthContext);

  const { socket, conectarSocket } = useSocket("http://localhost:3000");

  // Si el usuario se loguea, se conecta al socket
  useEffect(() => {
    if (auth.isLogged) {
      conectarSocket();
    }
  }, [auth.isLogged, conectarSocket]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        conectarSocket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
