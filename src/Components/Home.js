import React from 'react';

const Home = () =>{
  return(
      <React.Fragment>
        <section id="home">
        <div id="home-cover">
          <div id="home-content-box">
            <h2 className="title">Pirates Corp</h2>
            <h6 className="sub-title">we make the best </h6>
            <div className="butn-holder">
              <a className="pi-btn" href="/host.piratescorp.com">
                Start web hosting
              </a>
            </div>
          </div>
        </div>
      </section>
      </React.Fragment>
  )
}

export default Home;