import React from 'react'
import App from './App.jsx'
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from "./views/home.jsx";
import './styles.css';
import AddProducts from './views/dasboard/add_products.jsx';

const router = createBrowserRouter([
  {
  path: '/',
  element: <App/>
  },
  {
    path: '/administracion',
    element: <Home/>
  },
  {
    path: '/administracion/crear',
    element: <AddProducts/>
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
