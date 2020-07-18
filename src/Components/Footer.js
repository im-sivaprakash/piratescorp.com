import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <footer id="footer">
            

            <div className="footer-bg">

                    <div className="container">

                    <div className="footer-row">


                        <div className="footer-sec">
                            <div className="footer-logo">logo</div>
                            <p className="logo-text">We make the best</p>
                        </div>


                        <div className="footer-sec">
                            <h4 className="footer-heading">Service</h4>
                            <ul className="footer-list">
                                <li><a href="/test">Web hosting</a></li>
                                <li><a href="/test">Domain Registeration</a></li>
                                <li><a href="/test">Website development</a></li>
                                <li><a href="/test">Graphic / web Designing</a></li>
                            </ul>
                        </div>

                        <div className="footer-sec">
                            <h4 className="footer-heading">company</h4>
                            <ul className="footer-list">
                                <li><a href="/test">About</a></li>
                                <li><a href="/test">terms of service</a></li>
                                <li><a href="/test">privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="footer-sec">
                            <h4 className="footer-heading">Support</h4>
                            <ul className="footer-list">
                                <li><a href="/test"><i className="fas fa-phone-alt"></i>+91 98407 93240</a></li>
                                <li><a href="/test"><i className="fas fa-envelope-open"></i>support@piratescorp.com</a></li>

                            </ul>
                        </div>

                    </div>


                    </div>


            </div>


            <div className="copyrigths">
                <p id="copyrigths-text"> Pirates &copy; {new Date().getFullYear()} </p>
            </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;