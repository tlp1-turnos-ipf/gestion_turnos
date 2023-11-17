import { NavBarAdmin } from "./navBar/NavBarAdmin";
import { NavWindowAdmin } from "./navWindows/NavWindowAdmin";

export const MainAdmin = () => {
  return (
    <main className="container-fluid m-0 p-0">
      <div className="d-flex">
        <NavBarAdmin />
        <NavWindowAdmin />
      </div>
    </main>
  );
};
