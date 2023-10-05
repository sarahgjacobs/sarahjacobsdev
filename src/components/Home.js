import React from 'react'
import pdf from '../images/SJ_resume.pdf'
import resume from '../images/SJ_resume.docx'

function Home() {
    return (
        <div className='home-page'>
            <h1>Sarah Jacobs</h1>
            <div>
                <p className='bio'>
                    Hello, I'm Sarah Jacobs, a <span className='soft-dev'>Software Developer</span> based in Atlanta, GA,
                    on a mission to blend the best of tech and creativity. With a knack
                    for communication, a love for digital media, and a dash of teaching experience,
                    I've infused my skills with a Coding certification from Georgia Tech
                    Bootcamps. Now, I'm on the hunt for exciting opportunities in the tech
                    world. Curious to know more? Swing by the 'About' page to discover my
                    newest websites!
                </p>
            </div>
            <div className='button'>
                <a href={pdf} download>
                    <button className="resume-button">Resume PDF</button>
                </a>
                <a href={resume} download>
                    <button className="resume-button">Resume Docx</button>
                </a>
            </div>
        </div>
    )
}

export default Home