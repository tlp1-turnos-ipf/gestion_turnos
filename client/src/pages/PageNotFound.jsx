import { useNavigate } from "react-router-dom";
import img1 from "../assets/images/img1.svg";

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navega hacia atrás en la pila de historial
  };

  return (
    <div className="container">
      <img src={img1} alt="" />
      <h1>La página que ha solicitado no se encuentra disponible</h1>
      <div className="boton">
        <button onClick={handleGoBack}>Volver atrás</button>
      </div>
    </div>
  );
};
