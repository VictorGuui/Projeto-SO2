import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../components/login/login";
import { SignUp } from "../components/signup/signup";
import { Home } from "../components/home/home";
import ProtectedRoute from './ProtectedRoute';
import { Form } from "../components/form/form";

export const Routes = () => {
  const routes = [
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    }
  ];

  const authenticatedRoutes = [
    {
      path: '/home',
      element: <ProtectedRoute element={<Home />} />
    },
    {
      path: '/form',
      element: <ProtectedRoute element={<Form />} />
    }
  ];

  const router = createBrowserRouter([
    ...routes,
    ...authenticatedRoutes
  ]);

  return <RouterProvider router={router} />;
};
