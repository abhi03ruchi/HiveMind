import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TeamPage from './pages/Team/Team';
import ProjectPage from './pages/Project/Project';
import WorkLogin from './pages/Login/WorkLogin';
import Register from './pages/Login/Register';
import LandingPage from './pages/LandingPage/HomeCorrect';
import AdminAnalytics from './pages/Admin/AdminAnalytics';
import AdminTeam from './pages/Admin/AdminTeam';
import AdminProject from './pages/Admin/AdminProject';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "adminanalytics",
    element: <AdminAnalytics />,
  },  
  {
    path: "AdminTeam",
    element: <AdminTeam />,
  },
  {
    path: "AdminProject",
    element: <AdminProject />,
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
  {
    path: "login",
    element: <WorkLogin />,
  },
  {
    path: "register",
    element: <Register />,
  },


]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

