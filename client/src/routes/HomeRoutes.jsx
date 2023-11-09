import { Route, Routes } from "react-router-dom"

import { PaginaPrincipal } from '../pages/PaginaPrincipal';

export const HomeRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <PaginaPrincipal /> } />
        <Route path="/home" element={ <PaginaPrincipal /> } />
    </Routes>
  )
}
