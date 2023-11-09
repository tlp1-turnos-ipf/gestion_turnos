import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Login } from "../pages/auth/login";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas Públicas */}
                <Route path="/auth/*" element={
                    <PublicRoutes>
                        <Routes>
                            <Route path="/login" element= {<Login/>} />
                        </Routes>
                    </PublicRoutes>
                } />

                {/* Rutas Privadas */}
                <Route path="/*" element={
                    <PrivateRoutes>
                    </PrivateRoutes>
                } 
                />

                
            </Routes>
        </BrowserRouter>
    )
}