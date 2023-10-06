import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Let's Connect</h1>
        <p className='contact-outro'>Exploring my portfolio was just the beginning. Let's connect, 
            chat about these projects, and discover how I can enhance your team's success. I'm just a click away! </p>
      <div className='contact-icons'>
      <div className="social-icons">
        <a href="mailto:sgjacobs14@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/sarahgjacobs/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/sarahgjacobs" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      </div>
    </div>
  );
}

export default Contact;
