import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/auth/login";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { HomeRoutes } from "../routes/HomeRoutes";
import { PageNotFound } from "../pages/PageNotFound";
import { Register } from "../pages/auth/Register";
import { Index } from "../pages";
import { AdminRoutes } from "./AdminRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Públicas */}
        <Route
          path="/auth/*"
          element={
            <PublicRoutes>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </PublicRoutes>
          }
        />

        {/* Rutas Privadas */}
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HomeRoutes />
              <AdminRoutes />
            </PrivateRoutes>
          }
        />

        {/* Ruta Principal */}
        <Route
          path="/"
          element={
            <PublicRoutes>
              <Index />
            </PublicRoutes>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
