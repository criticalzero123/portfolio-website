import React from "react";
import { FiFacebook, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import "./SideIconBar.css";

const SideIconBar = () => {
  return (
    <div className="icon-bar ml-16 hidden lg:block">
      <FiFacebook
        size={20}
        className="mb-10 icon  hover:-translate-y-1 transition duration-300 cursor-pointer "
        onClick={() =>
          window.open("https://facebook.com/criticalzero0", "_blank")
        }
      />
      <FiGithub
        size={20}
        className="mb-10 icon  hover:-translate-y-1 transition duration-300 cursor-pointer "
        onClick={() =>
          window.open("https://github.com/criticalzero123", "_blank")
        }
      />
      <FiLinkedin
        size={20}
        className="mb-10 icon  hover:-translate-y-1 transition duration-300 cursor-pointer "
        onClick={() =>
          window.open("https://linkedin.com/in/jamesdylancaramonte", "_blank")
        }
      />
      <FiMail
        size={20}
        className="mb-10 icon  hover:-translate-y-1 transition duration-300 cursor-pointer "
      />
      <div className="horizontal-line ml-2"></div>
    </div>
  );
};

export default SideIconBar;
