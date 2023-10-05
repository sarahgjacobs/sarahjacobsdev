import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <div className='left-nav'>Sarah Jacobs</div>
            <div className='right-nav'>
                <ul>
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
            </div>
        </div>
    )
}

export default Navbar