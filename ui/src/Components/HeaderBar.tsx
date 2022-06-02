import React from 'react'

import {useResponsiveContextData} from '../contexts/ResponsiveContext'


import FullHeader from "./Header/FullHeader";
import MobileHeader from "./Header/MobileHeader";  


const HeaderBar = () => {

  const {isLargeMobile} = useResponsiveContextData()

  return (
    <>
      {isLargeMobile ? <MobileHeader /> : <FullHeader />}
    </>
  )
}

export default HeaderBar