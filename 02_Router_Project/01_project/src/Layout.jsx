// The header and footer elements remain fixed and the child elements in between are changed

import React from 'react'
import Header from './Componets/Header/Header'
import Footer from './Componets/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />   {/* Header component, typically contains the navigation bar */}
    <Outlet />   {/* Outlet component, renders the matched child route component */}
    <Footer />   {/* Footer component, typically contains footer content */}
    </>
  )
}

export default Layout 