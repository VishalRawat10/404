import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './cards.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
const router=createBrowserRouter([{path:'',element:<App/>,children:[]}]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
