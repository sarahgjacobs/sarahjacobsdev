import React from 'react'

function About() {
    return (

<div className='about-page'>
<h1>About</h1>
<div className='tools-education'>
  <div className='section'>
    <div className='tech-stack'>
      <h2 className='tech-item'>Tools & Languages</h2>
      <p className='tech-item'>React</p>
      <p className='tech-item'>JavaScript</p>
      <p className='tech-item'>HTML/CSS</p>
      <p className='tech-item'>Python</p>
    </div>
  </div>
  <div className='section'>
    <div className='tech-stack'>
        <h2 className='tech-item'>Education</h2>
        <div className='tech-item'>
        <h3 className='tech-item'>Georgia Tech</h3>
        <p className='tech-item'>Certicate of Web Development</p>
        <h3 className='tech-item'>Georgia College & State University</h3>
        <p className='tech-item'>Bachelors of Communication</p>
        </div>
    </div>
  </div>
</div>
</div>

    )
}

export default About