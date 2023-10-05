import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';


function Navbar() {
    return (
        <div className='navbar'>
            <div className='left-nav'>Sarah Jacobs</div>
            <div className='right-nav'>
                <nav>
                    <ul className='list'>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Navbar