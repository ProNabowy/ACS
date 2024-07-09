import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// Pages
// This an example of how to import page by lazy load
const Home = lazy(_ => import('../pages/Home'));
const About = lazy(_ => import('../pages/About'));
const Contact = lazy(_ => import('../pages/Contact'));
const Services = lazy(_ => import('../pages/Services'));
const Information = lazy(_ => import('../pages/Information'));

export default function useHandleRoutes() {
  let routes = useRoutes([

    // This an example of create route
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/services", element: <Services /> },
    { path: "/information", element: <Information /> },
  ]);

  return { routes };
}
