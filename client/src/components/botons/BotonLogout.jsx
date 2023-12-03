import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const BotonLogout = () => {
  const { logout } = useContext(AuthContext);
  const nagivate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    //Cambiar estado
    logout();

    nagivate("/");
  };
  return (
    <button onClick={Logout} className="text-white btn btn-primary">
      Salir
    </button>
  );
};
