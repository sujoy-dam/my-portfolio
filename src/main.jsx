import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Skill from './components/Skill/Skill.jsx';
import Project from './components/Project/Project.jsx';
import Details from './components/Details/Details.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/skill",
        element: <Skill />
      },
      {
        path: "/project",
        element: <Project />
      }
    ]
  },
  {
    path: "/details/:id",
    element: <Details />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
