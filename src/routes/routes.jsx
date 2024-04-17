import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// Pages
// This an example of how to import page by lazy load
// const Login = lazy(_ => import('../pages/Login'));

export default function useHandleRoutes() {
  let routes = useRoutes([

    // This an example of create route
    // { path: "/login", element: <Login /> },
  ]);

  return { routes };
}
