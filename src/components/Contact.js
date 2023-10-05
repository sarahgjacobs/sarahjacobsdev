import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="social-icons">
      <a href="https://www.linkedin.com/in/sarahgjacobs/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
        <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/sarahgjacobs" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-2x"></i></a>
      </div>
    </div>
  );
}

export default Contact;
