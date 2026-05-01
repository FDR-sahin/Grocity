import React from 'react'
import Navber from '../components/Navber/Navber'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navber/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout