import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faJs,
    faHtml5,
    faNode,
    faPython,
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
                            <FontAwesomeIcon icon={faPython} className='green-icon' /> Python
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
                <div className='section'>
                <div className='tech-stack'>
                        <h2 className='tech-item'>Relevant Experience</h2>
                        
                            <p className='tech-item'>Established growing English tutoring business for Atlanta expat families as a <span className='soft-dev'>self-taught</span> Korean speaker</p>
                            <p className='tech-item'>ESOL teacher fostering language fluency for diverse adult families worldwide </p>
                            <p className='tech-item'>Reliable house and pet sitter with 5+ years of dedicated service</p>
                            <p className='tech-item'>Computer science educator for AP and college levels, shaping future tech innovators</p>
                            <p className='tech-item'>Self-published author with rich, twisting plots and thoughtful characters </p>

                            
                        
                    </div>
                    </div>
            </div>
        </div>

    )
}

export default About