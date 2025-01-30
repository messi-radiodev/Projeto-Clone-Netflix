import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";

const AppRoutes = () => {

    const logado = localStorage.getItem('@user')
    
    return (

        <BrowserRouter>
            <Routes>
                {/* Se o usuário não estiver logado, mostra o Login */}
                {!logado ? (
                    <>
                        <Route path="/" element={<Login />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                ) : (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>

    )
};

export default AppRoutes;