import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {Navigate} from "react-router-dom";

export const PublicRoutes = ({ children }) => {

    // Acceder a la información del contexto
    const { auth } = useContext(AuthContext)
  
  
    return ( !auth.isLogged )
            ? children
            : <Navigate to={'/'} />
  }
  