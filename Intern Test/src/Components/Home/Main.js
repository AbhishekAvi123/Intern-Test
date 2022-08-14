import React from 'react'

import Navbar from '../Sidebar/Navbar'
import All from '../Home/All'
import Header from '../Header/Header'

const Main = () => {
  return (
    <div>
        <Header/>
        
        <Navbar/>
        <div className='col-all'>
        <All/>
        </div>
    </div>
  )
}

export default Main
