import React from "react";
import { TypeAnimation } from "react-type-animation";

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
      <div className="xl:pt-64 xl:pl-40 lg:pt-52 lg:pl-28  pt-24">
        <p className="hi-p mb-3">
          <span className="code-text">{"<Hello />, "}</span>my name is
        </p>
        <p className="name-text">James Dylan Caramonte</p>
        <TypeAnimation
          sequence={strings}
          speed={40}
          wrapper="h1"
          repeat={Infinity}
          className="type-animation"
        />
        <p className="description mt-10 sm:mt-5">
          I'm an aspiring student at{" "}
          <span className="hi-p">University of Cebu - Main Campus</span> aims
          <br />
          to be a future software engineer. Currently, I'm focused on <br />
          building software system application and website application.
        </p>
      </div>
    </div>
  );
};

export default HeaderHome;
