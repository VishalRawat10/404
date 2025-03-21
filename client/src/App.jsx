import React from 'react'
import Header from './components/Header'
import Signup from './components/signup'
import Login from './components/login'
import Cards from './components/cards'
import {Outlet} from 'react-router-dom'

function App() {
  return <>
 <Header/>
 <Outlet/>
 
  
  </>
}

export default App
