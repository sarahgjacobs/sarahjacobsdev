import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';


function Navbar() {
    return (
        <div className='navbar'>
            <div className='left-nav'>Sarah Jacobs</div>
            <div className='right-nav'>
            <BrowserRouter>

                <ul className='list'>
                    <li>
                        <Link to="/" className="">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="">
                            Contact
                        </Link>
                    </li>
                </ul>
                </BrowserRouter>

            </div>
        </div>
    )
}

export default Navbar