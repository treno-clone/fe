import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../pages/NotFound";
import AuthRoute from "./AuthRoute";
import ClientRoute from "./ClientRoute";

const router = createBrowserRouter([
  ...AuthRoute,
  ...ClientRoute,
  { path: "*", Component: NotFound },
]);

const AppRoute = () => {
  return <RouterProvider router={router} />;
};

export default AppRoute;
