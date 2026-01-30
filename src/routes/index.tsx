import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../pages/NotFound";
import AuthRoute from "./AuthRoute";

const router = createBrowserRouter([
    ...AuthRoute,
    {path:"*", Component: NotFound}
])

const AppRoute = () =>{
    return <RouterProvider router={router} />
}

export default AppRoute;