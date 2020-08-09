import React from "react";

import Home from "../Components/Home";
import Service from "../Components/Service";
import Testimonials from "../Components/Testimonials";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function homepage() {
  return (
    <React.Fragment>
      <Home />
      <Service />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default homepage;
