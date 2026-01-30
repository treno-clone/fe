import AuthLayout from "../components/layouts/AuthLayout";
import ForgotPassword from "../pages/client/auth/ForgotPassword";
import SetNewPassword from "../pages/client/auth/SetNewPassword";
import Signin from "../pages/client/auth/Signin";
import Signup from "../pages/client/auth/Signup";

const AuthRoute = [
  {
    path: "",
    Component: AuthLayout,
    children: [
      { path: "signin", Component: Signin },
      { path: "signup", Component: Signup },
      { path: "forgot-password", Component: ForgotPassword },
      { path: "reset-password/:resetToken", Component: SetNewPassword },
    ],
  },
];

export default AuthRoute;
