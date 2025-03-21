import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from './context/userContext.jsx';

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './cards.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Cards from './components/cards.jsx';
const router=createBrowserRouter([{path:'/',element:<App/>,children:[
  {path:'/login',element:<Login/>},
  {path:'/signup',element:<Signup/>},
  {path:'/cards',element:<Cards/>},
]}]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <RouterProvider router={router}></RouterProvider></UserProvider>
  </StrictMode>
)
