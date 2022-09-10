import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FiFacebook, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import "./HeaderHome.css";

const HeaderHome = () => {
  const strings = [
    "I build website application.",
    3000, // Waits 1s
    "I build system application.",
    3000, // Waits 1s
  ];
  return (
    <div className="h-screen" id="header">
      <div className="md:pt-48 md:pl-6 xl:pt-64 xl:pl-40 lg:pt-52 lg:pl-28  pt-24">
        <p className="hi-p mb-3">
          <span className="code-text">{"<Hello />, "}</span>my name is
        </p>
        <p className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl name-text mb-5">
          James Dylan Caramonte
        </p>
        <TypeAnimation
          sequence={strings}
          speed={40}
          wrapper="h1"
          repeat={Infinity}
          className="text-lg md:text-3xl type-animation"
        />
        <p className="description mt-10 sm:mt-5">
          I'm an aspiring student at{" "}
          <span className="hi-p">University of Cebu - Main Campus</span> aims
          <br />
          to be a future software engineer. Currently, I'm focused on <br />
          building software system application and website application.
        </p>
        <div className="flex lg:hidden block mt-16">
          <FiFacebook
            size={30}
            className="icon hover:-translate-y-1 transition duration-300 cursor-pointer mr-10"
            onClick={() =>
              window.open("https://facebook.com/criticalzero0", "_blank")
            }
          />
          <FiGithub
            size={30}
            className="icon hover:-translate-y-1 transition duration-300 cursor-pointer mr-10"
            onClick={() =>
              window.open("https://github.com/criticalzero123", "_blank")
            }
          />
          <FiLinkedin
            size={30}
            className="icon hover:-translate-y-1 transition duration-300 cursor-pointer mr-10"
            onClick={() =>
              window.open(
                "https://linkedin.com/in/jamesdylancaramonte",
                "_blank"
              )
            }
          />
          <FiMail
            size={30}
            className="icon hover:-translate-y-1 transition duration-300 cursor-pointer mr-10"
            onClick={() =>
              window.open(
                "mailto:caramonte159@gmail.com?subject=HELLO&body=Hi%20James%20Dylan%20Caramonte"
              )
            }
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HeaderHome;
