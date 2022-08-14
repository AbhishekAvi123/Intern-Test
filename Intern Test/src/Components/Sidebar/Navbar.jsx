import React from 'react'

// CSS of navbar
import "../Sidebar/Navbar.css"

const Navbar = () => {
    return (
        <div>

            <div className="slider">
                <ul>
                    <li>
                        <a href="/">
                            <span className="links">

                                <svg width="55" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 3H3V21H21V3H15ZM19 5V7H15V5H19ZM13 5V10H11V5H13ZM9 5V7H5V5H9ZM5 19V9H9V12H15V9H19V19H5Z" fill="#9A9AB0" />
                                    <path d="M10 15H7V17H10V15Z" fill="#9A9AB0" />
                                </svg>
                            </span>

                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="links">
                                <svg width="55" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 19V6H16V19H15V3H9V19H8V12H2V19H1V21H23V19H22ZM4 19V14H6V19H4ZM11 19V5H13V19H11ZM18 19V8H20V19H18Z" fill="#9A9AB0" />
                                </svg>
                            </span>

                        </a>
                    </li>
                    <li>
                        <a href="/Home">
                            <span className="links">
                                <svg width="55" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49999 11C8.94771 11 8.49999 10.5523 8.49999 10C8.49999 9.44772 8.94771 9.00001 9.49999 9.00001C10.0523 9.00001 10.5 9.44772 10.5 10C10.5 10.5523 10.0523 11 9.49999 11ZM11.5 17.21V19.99C9.22999 19.86 7.20999 18.78 5.83999 17.13C6.51999 16.59 8.11999 16.02 9.49999 16.02C9.57999 16.02 9.64999 16.03 9.72999 16.03C9.96999 15.39 10.4 14.74 11.03 14.17C10.47 14.06 9.93999 14.01 9.49999 14.01C8.19999 14.01 6.10999 14.46 4.76999 15.44C4.27999 14.4 3.98999 13.24 3.98999 12.01C3.98999 7.60001 7.57999 4.01001 11.99 4.01001C16.4 4.01001 19.99 7.60001 19.99 12.01C19.99 13.22 19.72 14.36 19.24 15.38C18.24 14.78 16.88 14.51 16 14.51C14.48 14.51 11.5 15.33 11.5 17.21V17.21ZM16 9.00001C14.89 9.00001 13.99 9.89001 14 11C14 12.11 14.89 13 16 13C17.11 13 18 12.11 18 11C18 9.89001 17.11 9.00001 16 9.00001ZM9.49999 13C11.15 13 12.5 11.65 12.5 10C12.5 8.35001 11.15 7.00001 9.49999 7.00001C7.84999 7.00001 6.49999 8.35001 6.49999 10C6.49999 11.65 7.84999 13 9.49999 13Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 8.35001 11.15 7.00001 9.49999 7.00001C7.84999 7.00001 6.49999 8.35001 6.49999 10C6.49999 11.65 7.84999 13 9.49999 13C11.15 13 12.5 11.65 12.5 10ZM9.49999 11C8.94999 11 8.49999 10.55 8.49999 10C8.49999 9.45001 8.94999 9.00001 9.49999 9.00001C10.05 9.00001 10.5 9.45001 10.5 10C10.5 10.55 10.05 11 9.49999 11ZM16 13C17.11 13 18 12.11 18 11C18 9.89001 17.11 9.00001 16 9.00001C14.89 9.00001 13.99 9.89001 14 11C14 12.11 14.89 13 16 13ZM11.99 2.01001C6.46999 2.01001 1.98999 6.49001 1.98999 12.01C1.98999 17.53 6.46999 22.01 11.99 22.01C17.51 22.01 21.99 17.53 21.99 12.01C21.99 6.49001 17.51 2.01001 11.99 2.01001ZM5.83999 17.12C6.51999 16.58 8.10999 16.01 9.49999 16.01C9.56999 16.01 9.64999 16.02 9.72999 16.02C9.96999 15.38 10.4 14.73 11.03 14.16C10.47 14.06 9.93999 14 9.49999 14C8.19999 14 6.10999 14.45 4.76999 15.43C4.26999 14.39 3.98999 13.23 3.98999 12C3.98999 7.59001 7.57999 4.00001 11.99 4.00001C16.4 4.00001 19.99 7.59001 19.99 12C19.99 13.2 19.72 14.34 19.24 15.37C18.24 14.78 16.88 14.5 16 14.5C14.48 14.5 11.5 15.31 11.5 17.2V19.98C9.22999 19.85 7.20999 18.77 5.83999 17.12V17.12Z" fill="#9A9AB0" />
                                </svg>
                            </span>

                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="links">
                                <svg width="55" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 3H3V21H21V3H15ZM19 5V7H15V5H19ZM13 5V10H11V5H13ZM9 5V7H5V5H9ZM5 19V9H9V12H15V9H19V19H5Z" fill="#9A9AB0" />
                                    <path d="M10 15H7V17H10V15Z" fill="#9A9AB0" />
                                </svg>
                            </span>

                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="links">
                                <svg width="55" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 10H21V5H3V10H4C4.53043 10 5.03914 10.2107 5.41421 10.5858C5.78929 10.9609 6 11.4696 6 12C6 12.5304 5.78929 13.0391 5.41421 13.4142C5.03914 13.7893 4.53043 14 4 14H3V19H21V14H20C19.4696 14 18.9609 13.7893 18.5858 13.4142C18.2107 13.0391 18 12.5304 18 12C18 11.4696 18.2107 10.9609 18.5858 10.5858C18.9609 10.2107 19.4696 10 20 10V10ZM19 15.874V17H5V15.874C5.85953 15.653 6.62115 15.1524 7.16498 14.4511C7.7088 13.7498 8.00395 12.8875 8.00395 12C8.00395 11.1125 7.7088 10.2502 7.16498 9.5489C6.62115 8.84756 5.85953 8.347 5 8.126V7H19V8.126C18.1405 8.347 17.3789 8.84756 16.835 9.5489C16.2912 10.2502 15.9961 11.1125 15.9961 12C15.9961 12.8875 16.2912 13.7498 16.835 14.4511C17.3789 15.1524 18.1405 15.653 19 15.874Z" fill="#9A9AB0" />
                                    <path d="M13.1677 8.44552L9.16772 14.4454L10.8318 15.5548L14.8318 9.55491L13.1677 8.44552Z" fill="#9A9AB0" />
                                    <path d="M11 9H9V11H11V9Z" fill="#9A9AB0" />
                                    <path d="M15 13H13V15H15V13Z" fill="#9A9AB0" />
                                </svg>
                            </span>

                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="links">
                                <svg width="55" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z" fill="#9A9AB0" />
                                </svg>

                            </span>

                        </a>
                    </li>



                   <div className='setting'>
                    <li>
                        <a href="Setting">
                            <span className="links">
                                <svg width="55" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.57 5.11 19.4 5.02 19.22 5.02C19.16 5.02 19.1 5.03 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.88996 5.03 4.82996 5.02 4.76996 5.02C4.59996 5.02 4.42996 5.11 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.42996 18.89 4.59996 18.98 4.77996 18.98C4.83996 18.98 4.89996 18.97 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.11 18.97 19.17 18.98 19.23 18.98C19.4 18.98 19.57 18.89 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM17.45 11.27C17.49 11.58 17.5 11.79 17.5 12C17.5 12.21 17.48 12.43 17.45 12.73L17.31 13.86L18.2 14.56L19.28 15.4L18.58 16.61L17.31 16.1L16.27 15.68L15.37 16.36C14.94 16.68 14.53 16.92 14.12 17.09L13.06 17.52L12.9 18.65L12.7 20H11.3L11.11 18.65L10.95 17.52L9.88996 17.09C9.45996 16.91 9.05996 16.68 8.65996 16.38L7.74996 15.68L6.68996 16.11L5.41996 16.62L4.71996 15.41L5.79996 14.57L6.68996 13.87L6.54996 12.74C6.51996 12.43 6.49996 12.2 6.49996 12C6.49996 11.8 6.51996 11.57 6.54996 11.27L6.68996 10.14L5.79996 9.44L4.71996 8.6L5.41996 7.39L6.68996 7.9L7.72996 8.32L8.62996 7.64C9.05996 7.32 9.46996 7.08 9.87996 6.91L10.94 6.48L11.1 5.35L11.3 4H12.69L12.88 5.35L13.04 6.48L14.1 6.91C14.53 7.09 14.93 7.32 15.33 7.62L16.24 8.32L17.3 7.89L18.57 7.38L19.27 8.59L18.2 9.44L17.31 10.14L17.45 11.27ZM12 8C9.78996 8 7.99996 9.79 7.99996 12C7.99996 14.21 9.78996 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 9.99996 13.1 9.99996 12C9.99996 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z" fill="#9A9AB0" />
                                </svg>
                            </span>

                        </a>
                    </li>
                    </div>

                </ul>
            </div>


        </div>

    )
}

export default Navbar