import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/auth/login";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { HomeRoutes } from "../routes/HomeRoutes";
import { PageNotFound } from "../pages/PageNotFound";
import { Register } from "../pages/auth/Register";
import { PaginaPrincipal } from "../pages/PaginaPrincipal";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Principal */}
        <Route path="/" element={<PaginaPrincipal />} />

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
            </PrivateRoutes>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
