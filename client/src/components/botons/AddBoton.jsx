import { Link } from "react-router-dom";

export const AddBoton = ({ route, children }) => {
  return (
    <Link to={route} className="btn btn-primary text-light m-1">
      {children}
    </Link>
  );
};
