import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import HomePage from "./pages/HomePage.jsx";
import BookServicesPage from "./pages/BookServicesPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/AboutPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/auth",
    element: <AuthPage />, 
  },
  {
    path: "/book-services",
    element: (
      <RequireAuth>
        <BookServicesPage />
      </RequireAuth>
    ),
  },
  {
    path: "/book-services/:serviceName",
    element: (
      <RequireAuth>
        <BookServicesPage />
      </RequireAuth>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element:(
      <RequireAuth>
        <ProfilePage />
      </RequireAuth>
    ),
  },
  { path: "/admin",
    element: (
      <RequireAuth>
        <AdminPanel />  
      </RequireAuth>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
