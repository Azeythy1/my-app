import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// import Home from "./routes/Home";
import CheckList from "./routes/CheckList";
import Cliente from "./routes/Cliente";
import Form from "./routes/Form";
import Conferencia from "./routes/Conferencia";

import App from './App';
const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"cliente",
    element:<Cliente/>,
  },
  {
    path:"checklist",
    element:<CheckList/>,
  },
  {
    path:"form",
    element:<Form/>,
  },
  {
    path:"conferencia",
    element:<Conferencia/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
