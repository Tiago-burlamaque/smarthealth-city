import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from '../pages/Home'
import Avaliacao from '../pages/Avaliacao'
import Dashboard from '../pages/Dashboard'
import Resultado from '../pages/Resultado'



const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/avaliacao",
                element: <Avaliacao />
            },
            {
                path: "/resultado",
                element: <Resultado />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            }
        ]
    }
]);

export default router;