// create new root and pass componets

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Componets/Home/Home.jsx'
import About from './Componets/About/About.jsx'
import Contact from './Componets/Contact/Contact.jsx'
import User from './Componets/User/User.jsx'


// Create the router with defined routes
const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >              
      <Route path='' element={<Home />} />               {/* Default route to Home component */}
      <Route path='about' element={<About />} />         {/* Route to About component */}
      <Route path='contact' element={<Contact />} />     {/* Route to Contact component */}   
      <Route path='user/:userid' element={<User />} />   {/* Route to User component with dynamic parameter userid */}
    </Route>
  )
)

// Render the RouterProvider with the created router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
