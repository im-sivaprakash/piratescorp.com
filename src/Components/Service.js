import React from 'react';
import server from '../img/paret_server.gif'

const Service = () => {
  return (
    <React.Fragment>
      <section id="service">
        <h3 className="section-heading">Service</h3>
        <div className="container">


          <div className="service-row ">
            <div className="pic-side">
              <img className="service-img" src={server} alt="webhosting" />
            </div>
            <div className="info-side">
            <h4 className="service-heading">Secure and Fastest web hosting</h4>
              <p className="service-info">`You promised to tell its age, there was no more to be two people! And yet I wish you were down here till I'm somebody else"--but, oh dear!' cried Alice, with a pair of boots every Christmas.'</p>
              <div className="btn-holder"><a href="/hosting" className="pi-btn2"><i className="fas fa-server"></i>Start web hosting</a></div>
              
            </div>
          </div>


          <div className="service-row">
          <div className="info-side">
          <h4 className="service-heading">Domain Registeration</h4>
              <p className="service-info">`You promised to tell its age, there was no more to be two people! And yet I wish you were down here till I'm somebody else"--but, oh dear!' cried Alice, with a pair of boots every Christmas.'</p>
              <div className="btn-holder"><a href="/hosting" className="pi-btn2"><i className="fas fa-globe-asia"></i>Get Domain</a></div>
            </div>
            <div className="pic-side">
              <img className="service-img" src={server} alt="webhosting" />
            </div>
          </div>


          <div className="service-row ">
            <div className="pic-side">
              <img className="service-img" src={server} alt="webhosting" />
            </div>
            <div className="info-side">
            <h4 className="service-heading">website Development</h4>
              <p className="service-info">`You promised to tell its age, there was no more to be two people! And yet I wish you were down here till I'm somebody else"--but, oh dear!' cried Alice, with a pair of boots every Christmas.'</p>
              <div className="btn-holder"><a href="/hosting" className="pi-btn2"><i className="far fa-window-maximize"></i>Get Started</a></div>
            </div>
          </div>



          

          <div className="service-row">
          <div className="info-side">
          <h4 className="service-heading">Graphic and Web Designing</h4>
              <p className="service-info">`You promised to tell its age, there was no more to be two people! And yet I wish you were down here till I'm somebody else"--but, oh dear!' cried Alice, with a pair of boots every Christmas.'</p>
              <div className="btn-holder"><a href="/hosting" className="pi-btn2"><i className="fas fa-swatchbook"></i>Get Started</a></div>
            </div>
            <div className="pic-side">
              <img className="service-img" src={server} alt="webhosting" />
            </div>
          </div>





       



        </div>
      </section>
    </React.Fragment>
  )
}

export default Service;