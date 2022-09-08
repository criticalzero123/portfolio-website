import React, { useEffect } from "react";

import "./Home.css";

import Aos from "aos";
import "aos/dist/aos.css";

import About from "../../components/Home/About/About";
import Contact from "../../components/Home/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import HeaderHome from "../../components/Home/Header/HeaderHome";
import Projects from "../../components/Home/Projects/Projects";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
      >
        <HeaderHome />
      </div>
      <div data-aos="fade-right" data-aos-duration="1000">
        <About />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Projects />
      </div>
      <div data-aos="fade-up-right" data-aos-duration="1000">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
