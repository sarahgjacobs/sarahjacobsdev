import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faJs,
    faHtml5,
    faNode,
    faDatabase,
    faBootstrap,
    faJava,
} from '@fortawesome/free-brands-svg-icons';

function About() {
    return (

        <div className='about-page'>
            <h1>About Sarah</h1>
            <div className='tools-education'>
                <div className='section'>
                    <div className='tech-stack'>
                        <h2 className='tech-item'>Tools & Languages</h2>
                        <p className='tech-item'>
                            <FontAwesomeIcon icon={faReact} className='green-icon' /> React
                        </p>
                        <p className='tech-item'>
                            <FontAwesomeIcon icon={faJs} className='green-icon' /> JavaScript
                        </p>
                        <p className='tech-item'>
                            <FontAwesomeIcon icon={faHtml5} className='green-icon' /> HTML/CSS
                        </p>
                        <p className='tech-item'>
                            <FontAwesomeIcon icon={faNode} className='green-icon' /> Node
                        </p>
                        <p className='tech-item'>
                            Express
                        </p>
                        <p className='tech-item'>
                            MongoDB
                        </p>
                        <p className='tech-item'>
                            <FontAwesomeIcon icon={faBootstrap} className='green-icon' /> Bootstrap/Tailwind
                        </p>
                        <p className='tech-item'>
                            <FontAwesomeIcon icon={faJava} className='green-icon' /> Java
                        </p>


                    </div>
                </div>
                <div className='section'>
                    <div className='tech-stack'>
                        <h2 className='tech-item'>Education</h2>
                        <div className='tech-item'>
                            <h3 className='tech-item'>Georgia Tech</h3>
                            <p className='tech-item'>24-week intensive program focused on gaining technical programming skills to prepare engineers for a profesisonal career.</p>
                            <h3 className='tech-item'>Georgia College & State University</h3>
                            <p className='tech-item'>BA in Communication with a concentration in Digital Media	</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About