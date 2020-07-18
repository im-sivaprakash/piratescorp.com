import React from 'react';

const Contact = () => {
  return (
    <React.Fragment>
     <section id="contact">
    <div className="con-bg">
        <div className="container">
          <h3 className="section-heading">Contact</h3>
          <div className="contact-row">
            <div className="con-left">
              <div className="contact-item">
                <i id="contact-icon" className="fas fa-envelope-open" />
                <h4 id="info-head">Tap to mail</h4>
                <a id="contact-info" href="mail:hello@piratescorp.com">hello@piratescorp.com</a>
              </div>
              <div className="contact-item">
                <i id="contact-icon" className="fas fa-id-badge" />
                <h4 id="info-head">Tap to Call</h4>
                <a id="contact-info" href="tel:+919840793240">+91 98407 93240</a>
              </div>
              <div className="contact-item">
                <i id="contact-icon" className="fab fa-whatsapp-square" />
                <h4 id="info-head">Whatsapp</h4>
                <a id="contact-info" href="https://api.whatsapp.com/send?phone=919840793240&text=Hi,pirate">Tap to Message</a>
              </div>
              <div className="contact-item">
                <i id="contact-icon" className="fas fa-location-arrow" />
                <h4 id="info-head">Location</h4>
                <p id="contact-info" >No: 93,Shop complex,Five rathas,<br />Mahabalipuram , India</p>
              </div>
            </div>
            <div className="con-right">
              <div className="contact-box">
                <h2 className="box-heading">Message</h2>
                <form className="contact-form">
                  <input className="text-box" type="text" placeholder="Your Name" />
                  <input className="text-box" type="text" placeholder="Your Email" />
                  <textarea className="text-box" placeholder="Message" ></textarea>
                  <button className="con-btn"><i className="fas fa-paper-plane"></i> Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
    </section> 
    </React.Fragment>
  )
}

export default Contact;