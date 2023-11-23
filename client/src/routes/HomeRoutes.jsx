import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
