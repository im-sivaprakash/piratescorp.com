import React from 'react';
import arrow from '../img/nav-items/arrow.svg';

const Navbar = () =>{
  return(
      <React.Fragment>
      <header>
        <nav>
          <div className="logo">LOGO</div>
          <input id="check-box" type="checkbox" />
          <label htmlFor="check-box">
          <i id="menu-bar" className="fas fa-bars"/>
            <div id="compass-img">
              <img id="arrow" src={arrow} alt={"^"} />
            </div>
          </label>
          <ul id="holder">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/service">Services</a>
            </li>
            <li>
              <a href="/testi">Testimonials</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <label htmlFor="check-box" id="close-menu">
                 <i className="fas fa-times"/>
            </label>
          </ul>
        </nav>
      </header>
      </React.Fragment>
  )
}

export default Navbar;