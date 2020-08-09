import React from "react";
import sea from "../img/home-items/sea.png";
import boat from "../img/home-items/Boat.png";
import Navbar from "../Components/Navbar";
import land from "../img/home-items/land.png";

const Home = () => {
  window.addEventListener("scroll", () => {
    let winScrl = window.scrollY;
    let sunVal = 120;
    let boatVal = 35;

    if (document.getElementById("sun") && document.getElementById("home")) {
      const sun = document.getElementById("sun");
      const sky = document.getElementById("home");
      sun.style.bottom = sunVal + winScrl + "px";

      console.log(winScrl);
      if (winScrl > 50) {
        sun.style.background = "rgba(249, 164, 79, 0.6)";
        sun.style.opacity = "0.6";
        sun.style.boxShadow = "1px 25px 44px rgba(228, 225, 136, 0.35)";
        sun.style.transition = "0.3s";
        sky.style.background="linear-gradient(178.14deg, rgba(148, 253, 236, 0.7) 17.57%, rgba(255, 255, 255, 0) 78.18%, rgba(255, 255, 255, 0) 78.46%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF";

        //home.style.background="red";
      } else {
        sun.style.background =
          "linear-gradient(180deg,rgba(249, 164, 79, 0.42) 60.47%,rgba(205, 114, 21, 0) 118.59%)";
        sun.style.transition = "0.4s";
        sky.style.transition = "0.4s";
        sky.style.background=
        "linear-gradient(178.23deg, rgba(121, 252, 231, 0.7) 17.54%,rgba(255, 255, 255, 0) 98.5%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF"

      }
    }

    if (document.getElementById("boat")) {
      document.getElementById("boat").style.left =
        boatVal + winScrl * 0.5 + "px";
    }
  });



  return (
    <React.Fragment>
      <section id="home">
        <Navbar />
        <h2 className="title">
          let's make huge by <br />
          doing small
        </h2>
        <img src={boat} className="boat" id="boat" alt="boat" />
        <div className="sun" id="sun"></div>
        <img src={sea} className="sea" id="sea" alt="sea" />
        <img src={land} className="land" id="land" alt="land" />
      </section>
    </React.Fragment>
  );
};

export default Home;
