import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import client1 from '../img/clients/chillstudies.JPG';
import client2 from '../img/clients/srimurugansculpture.jpeg';


const Testmonials = () => {
    return (
        <React.Fragment>

            <section id="testimonials">
                <h3 className="section-heading">What our clients says..</h3>

                <OwlCarousel
                    loop
                    items={1}
                    nav
                    autoplay={true}
                >
                    <div className="items">

                        <div className="container">

                            <div className="testimonial-row">

                                <div className="testimonial-pic">
                                    <div className="person-bg">
                                        <img className="person" src={client1} alt="chillstudies" />
                                    </div>
                                </div>

                                <div className="testimonial-review">

                                    <p className="review">Vom Rechte, das mit Recht; denn alles, was ihr Sünde, Zerstörung, kurz
              das Böse will und stets das Gute schafft.   das Böse will und stets das Gute schafft.</p>

                                    <div className="client-details">
                                        <p className="client-name">R.santhi</p>
                                        <a href="/chillstudies.com" className="website">chillstudies.com</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items">

                        <div className="container">

                            <div className="testimonial-row">

                                <div className="testimonial-pic">
                                    <div className="person-bg">
                                        <img className="person" src={client2} alt="chillstudies" />
                                    </div>
                                </div>

                                <div className="testimonial-review">

                                    <p className="review">Vom Rechte, das mit Recht; denn alles, was ihr Sünde, Zerstörung, kurz
              das Böse will und stets das Gute schafft.   das Böse will und stets das Gute schafft.</p>

                                    <div className="client-details">
                                        <p className="client-name">V.Senthamizhselvan</p>
                                        <a href="/srimurugansculpture.com" className="website">srimurugansculpture.com</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>

            </section>
        </React.Fragment>
    )
}

export default Testmonials;