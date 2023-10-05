import React from 'react'

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      
      <div className="social-icons">
        <a href="mailto:sgjacobs14@gmail.com">
          <i className="far fa-envelope"></i> Email Me
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </div>
  )
}

export default Contact