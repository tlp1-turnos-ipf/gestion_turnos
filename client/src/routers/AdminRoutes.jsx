import { Routes, Route } from "react-router-dom";
import { PagePatients } from "../pages/PagePatients";
import { PageCreatePatients } from "../pages/PageCreatePatients";
import { PageEditPatient } from "../pages/PageEditPatient";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/patients" element={<PagePatients />} />
      <Route path="/patients/create" element={<PageCreatePatients />} />
      <Route path="/patients/edit/:id" element={<PageEditPatient />} />
    </Routes>
  );
};
