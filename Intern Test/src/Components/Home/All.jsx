import React from 'react'
import "./Main.css"


const All = () => {
    return (
        <div>
             
            
            <div className='col-main-body'>
                <div className='col-sreach'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39002C15.44 5.61002 13.12 3.39002 10.32 3.05002C6.09002 2.53002 2.53002 6.09002 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.50002 14C7.01002 14 5.00002 11.99 5.00002 9.50002C5.00002 7.01002 7.01002 5.00002 9.50002 5.00002C11.99 5.00002 14 7.01002 14 9.50002C14 11.99 11.99 14 9.50002 14Z" fill="#9A9AB0" />
                    </svg>
                    <input placeholder='Search...' />
                
                
           
                </div>
                <div className='col-menu'>
                    <ul>
                        <a href='#'><li>All</li></a>
                        <a href='#'><li>Food</li></a>
                        <a href='#'><li>Drinks</li></a>
                        <a href='#'><li>Snack</li></a>
                        <a href='#'><li>Packages</li></a>

                    </ul>
                </div>
                <div col-body>
                    <h1>Food</h1>
                    <div className='col-card-1'>
                        <div className='col-card'>
                            <div className='col-img'></div>
                            <h4> Sashimi</h4>
                            <h3>$22</h3>
                        </div>
                        <div className='col-card'>
                            <div className='col-img'></div>
                            <h4>Unagi-Grilled Eel</h4>
                            <h3>$22</h3>
                        </div>
                        <div className='col-card'>
                            <div className='col-img'></div>
                            <h4>Soba - Buckwheat Noodles</h4>
                            <h3>$22</h3>
                        </div>
                    </div>
                    <div className='col-card-2'>
                        <div className='col-card'>
                            <div className='col-img'></div>
                            <h4> Onigiri -rice balls</h4>
                            <h3>$22</h3>
                        </div>
                        <div className='col-card'>
                            <div className='col-img'></div>
                            <h4> yakitori - Grilled Chicken</h4>
                            <h3>$22</h3>
                        </div>
                        <div className='col-card'>
                            <div className='col-img'></div>
                            <h4>Miso soup</h4>
                            <h3>$22</h3>
                        </div>
                    </div>
                </div>

                <h1>Drinks</h1>
                <div className='col-card-1'>
                    <div className='col-card'>
                        <div className='col-img'></div>
                        <h4> Sashimi</h4>
                        <h3>$22</h3>
                    </div>
                    <div className='col-card'>
                        <div className='col-img'></div>
                        <h4>Unagi-Grilled Eel</h4>
                        <h3>$22</h3>
                    </div>
                    <div className='col-card'>
                        <div className='col-img'></div>
                        <h4>Soba - Buckwheat Noodles</h4>
                        <h3>$22</h3>
                    </div>
                </div>
              </div>
            
        </div>

    )
}

export default All