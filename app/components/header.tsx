import React from 'react'

import Mobilenav from './Mobilenav'
import Nav from './Nav'

const header = () => {
  return (
    <div className='bg-black h-[13hv]'>
        <Nav />
        <Mobilenav />
      </div>  
  )
}

export default header
