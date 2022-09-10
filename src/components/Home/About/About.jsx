import React from "react";

import "./About.css";

import jd from "../../../asset/asd.jpg";

const About = () => {
  return (
    <div
      className="grid sm:grid-cols-1 lg:grid-cols-2 h-screen mb-52 sm:mb-18 lg:mb-0"
      id="about"
    >
      <div className="sm:pl-0 lg:pl-52">
        <p className="header mb-7">
          <span style={{ color: "#95A7EF" }}>#0</span> <span>About Me</span>
        </p>
        <p style={{ color: "#B8B8B8" }}>
          Hello! My name is James Dylan Caramonte and I enjoy building things. I
          studied BSIT at University of Cebu - Main Campus. Programming teach me
          alot how to solve a problem using different techniques.
          <br />
          <br />
          My main focus these days is to learn more different languages and
          create a system that helps a lot of people.
          <br />
          <br />
          Here are a few technologies that I learned:
          <br /> <br />
          *JavaScript(ES6) <br />
          *React <br />
          *Node.JS <br />
          *C#.NET <br />
          *ASP.NET <br />
          *MongoDB
        </p>
      </div>

      <div className="flex justify-center">
        <div className="sm:w-7/12 p-4">
          <img
            src={jd}
            alt="jd"
            className="rounded contrast-50 max-w-full h-auto align-middle border-none
                        hover:shadow-[0_25px_80px_-15px_rgba(238,99,82,1)]
                        hover:-translate-y-3 hover:-translate-x-4 transition duration-300 hover:contrast-100"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
