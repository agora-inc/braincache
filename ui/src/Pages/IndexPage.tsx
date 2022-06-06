import React from 'react'
import { Outlet, Link } from "react-router-dom";

import HeaderBar from '../Components/HeaderBar'
import Footer from '../Components/Footer'

const IndexPage = () => {
  return (
    <>
      <HeaderBar />
        <Outlet />
      <Footer />
    </>  
  )
}

export default IndexPage