import React from 'react'
import "../Home/Main.css"

import Navbar from '../Sidebar/Navbar'
import Table from '../Table/Table'
import Header from '../Header/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='col-nav'>
                <Navbar />
                <div className='col-cust'>
                    <div className='col-customer'>
                        <h2> Customer</h2>
                        <input placeholder='Search...' />
                    </div>
                    <div className='col-tab'>
                        <Table />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home