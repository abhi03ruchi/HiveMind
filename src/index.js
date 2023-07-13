import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TeamPage from './pages/Team/Team';
import ProjectPage from './pages/Project/Project';
import LandingPage from './pages/LandingPage/HomeCorrect';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "team",
    element: <TeamPage/>,
  },
  {
    path: "project",
    element: <ProjectPage/>,
  },
  {
    path: "landingPage",
    element: <LandingPage />,
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

