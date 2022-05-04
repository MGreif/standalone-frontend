import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from 'react-router-dom'
import { Registration } from "./pages/Registration";

export const Router: React.FC<any> = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<span>login</span>} />
        </Routes>
    </BrowserRouter>
}