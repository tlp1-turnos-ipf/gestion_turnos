import { Routes, Route } from "react-router-dom";
import { PagePatients } from "../pages/Patients/PagePatients";
import { PageCreatePatients } from "../pages/Patients/PageCreatePatients";
import { PageEditPatient } from "../pages/Patients/PageEditPatient";
import { PageEspecility } from "../pages/PageEspecility";
import { PageCreateEspeciality } from "../pages/PageCreateEspeciality";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/patients" element={<PagePatients />} />
      <Route path="/patients/create" element={<PageCreatePatients />} />
      <Route path="/patients/edit/:id" element={<PageEditPatient />} />
      <Route path="/especiality" element={<PageEspecility />} />
      <Route path="/especiality/create" element={<PageCreateEspeciality />} />
      <Route path="/especiality/edit/:id" element={<PageEditPatient />} />
    </Routes>
  );
};
