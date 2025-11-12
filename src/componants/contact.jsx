import React, { Component } from 'react';
import "./contact.css"
const Cont = () => {
    return ( 
        <>
        <div class="cont">CONTACT ME</div>
                <div class="contact-section">
     <div class="contact-container">

    
    <div class="contact-info">
      <h2>Don’t Be Shy!</h2>
      <p>
        Feel free to get in touch with me. I am always open to discussing new projects, 
        creative ideas or opportunities to be part of your visions.
      </p>

      <div class="info-item">
        <i class="fas fa-map-marker-alt"></i>
        <div>
          <h4>Address Point</h4>
          <p>Address East compound, New Cairo, Egypt</p>
        </div>
      </div>

      <div class="info-item">
        <i class="fas fa-envelope"></i>
        <div>
          <h4>Mail Me</h4>
          <p>Abdalrhmanhmouda@gmail.com</p>
        </div>
      </div>

      <div class="info-item">
        <i class="fas fa-phone"></i>
        <div>
          <h4>Call Me</h4>
          <p>+201111717189</p>
        </div>
      </div>
    </div>
    <div class="contact-form">
      <div class="form-row">
        <input type="text" placeholder="Your Name" required></input>
        <input type="email" placeholder="Your Email" required></input>
      </div>

      <input type="text" placeholder="Your subject" required></input>

      <textarea placeholder="Your Message" rows="5" required></textarea>

      <button type="submit">Send Message</button>
    </div>

  </div>
</div>


<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

    
        </>
     );
}
 
export default Cont;