import React from 'react'
import { Outlet, Link } from "react-router-dom";

import HeaderBar from '../Components/HeaderBar'

const IndexPage = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>  
  )
}

export default IndexPage