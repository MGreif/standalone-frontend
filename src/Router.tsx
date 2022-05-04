import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from 'react-router-dom'
import { buildRouterLink } from "./libs/linkBuilder";
import { Registration } from "./pages/Registration";

export const Router: React.FC<any> = () => {
    return <BrowserRouter>
        <Routes>
            <Route path={buildRouterLink("registration")} element={<Registration />} />
            <Route path={buildRouterLink("login")} element={<span>login</span>} />
        </Routes>
    </BrowserRouter>
}