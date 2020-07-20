import React from 'react';

const About = () =>{
  return(
      <React.Fragment>
      <section id="about">
      <div className="container">
          <div className="about-row" >
            <div className="logo-box">logo
          </div>
          <div className="about-info">
            <h3 className="about-heading">About Us</h3>
            <p id="about-text">Commodo et cillum sunt fugiat dolore fugiat dolor proident tempor in ipsum. Id officia eu consequat amet duis nisi aute aliquip velit aliquip velit. 
            Qui nostrud labore consectetur magna magna sit commodo officia ad. Sunt sint elit reprehenderit aliquip fugiat fugiat labore cupidatat ex fugiat. 
            Dolore sit duis proident qui et magna ad ullamco sunt est irure est occaecat.</p>
            <div className="Social-media-holder">
              <a className="soc-round" href="/insta"><i className="fab fa-whatsapp"></i></a>
              <a className="soc-round" href="/insta"><i className="fab fa-instagram"></i></a>
              <a className="soc-round" href="/insta"><i className="fab fa-youtube"></i></a>
              <a className="soc-round" href="/insta"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
      </div>
      </div>
      </section>
      </React.Fragment>
  )
}

export default About;