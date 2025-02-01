import React from 'react'
import Nav from './nav'
import Mobilenav from './Mobilenav'

const header = () => {
  return (
    <div className='bg-black'>
        <Nav />
        <Mobilenav />
      </div>  
  )
}

export default header
