import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import HomePage from './pages/HomePage.jsx';
import BookServicesPage from './pages/BookServicesPage.jsx';
import NotFound from './pages/NotFound.jsx';
import About from './pages/AboutPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement : <NotFound />,
  },
  {
    path : "/book-services",
    element: <BookServicesPage />,
  },
  {
    path: "/book-services/:serviceName",
    element: <BookServicesPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
 {
  path: "/profile",
  element: <ProfilePage />,
 },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
