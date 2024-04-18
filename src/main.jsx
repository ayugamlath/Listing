import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import Properties from './pages/Properties.jsx';
import Tours from './pages/Tours.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/properties",
    element: <Properties />,
  },
  {
    path: "/Tours",
    element: <Tours />,
  },
]);
const notify = () => toast("Wow so easy!");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ToastContainer />
    {/* <ContextProvider> */}
    <RouterProvider router={router} />
      {/* <App /> */}
    {/* </ContextProvider> */}

  </React.StrictMode>,
)
