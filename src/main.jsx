import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Components/Layout/Layout';
import Hopme from './Components/Home/Hopme';
import Order from './Components/Order/Order';

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path : '/',
        element: <Hopme></Hopme>,
        loader: () =>fetch('data.json')
      },
      {
        path:'review',
        element: <Order></Order>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
