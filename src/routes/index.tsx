// route.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../features/auth/login";
import Register from "../features/auth/register";
import HomePage from "../pages/home";
import { PATH } from "./pathConstant";
import RootLayout from "../layouts/rootLayout";
import AuthLayout from "../layouts/authLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, // when path is exactly "/"
        element: <Navigate to={`${PATH.HOME}`} replace />,
      },
      {
        path: PATH.AUTH,
        element: <AuthLayout />,
        children: [
          {
            path: PATH.LOGIN,
            element: <Login />,
          },
          {
            path: PATH.REGISTER,
            element: <Register />,
          },
        ],
      },
      {
        path: PATH.HOME,
        element: <HomePage />,
      },
    ],
  },
]);
