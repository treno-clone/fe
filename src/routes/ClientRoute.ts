import ClientLayout from "../components/layouts/ClientLayout";
import Homepage from "../pages/client/homepage/Homepage";

const ClientRoute = [
  {
    path: "",
    Component: ClientLayout,
    children: [{ index: true, Component: Homepage }],
  },
];

export default ClientRoute;
