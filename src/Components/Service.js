import React from "react";
import server from "../img/paret_server.gif";

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
              <h4 className="service-heading">
                Secure and Fastest web hosting
              </h4>
              <p className="service-info">
                
We provide a shared hosting service which is more fast and secure with excellent user experience.we provide various packages according to your business types which is effective and highly featured by which handling of websites, database and emails was made effort free. Uptime and technical support is provided at its best.


              </p>
              <div className="btn-holder">
                <a href="/hosting" className="pi-btn2">
                  <i className="fas fa-server"></i>Get started
                </a>
              </div>
            </div>
          </div>

          <div className="service-row">
            <div className="info-side">
              <h4 className="service-heading">Domain Registeration</h4>
              <p className="service-info">
              Domain registration is done once you select the package and confirm your payment and we offer all kinds of domain. We further offer free  ssl and WhoisGuard.technical support is provided at its best.


              </p>
              <div className="btn-holder">
                <a href="/hosting" className="pi-btn2">
                  <i className="fas fa-globe-asia"></i>Get Domain
                </a>
              </div>
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
              <p className="service-info">
              Dynamic and mobile responsive websites are developed with good user interface and experience. Designed for different business and professionals according to requirements. 


              </p>
              <div className="btn-holder">
                <a href="/hosting" className="pi-btn2">
                  <i className="far fa-window-maximize"></i>Get Started
                </a>
              </div>
            </div>
          </div>

          <div className="service-row">
            <div className="info-side">
              <h4 className="service-heading">Graphic and Web Designing</h4>
              <p className="service-info">
              Wanna design more interactive posters and unique logos for your business or advertising purpose? do reach us with content and idea we create incredible and good looking designs with great user experience
              </p>
              <div className="btn-holder">
                <a href="/hosting" className="pi-btn2">
                  <i className="fas fa-swatchbook"></i>Get Started
                </a>
              </div>
            </div>
            <div className="pic-side">
              <img className="service-img" src={server} alt="webhosting" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Service;
