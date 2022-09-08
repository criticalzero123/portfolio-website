import React from "react";

import { Link } from "react-router-dom";

import "./CustomButton.css";

const CustomButton = ({ marginTop, text, linkTo }) => {
  return (
    <div className={`${marginTop} flex justify-center`}>
      <Link to={`/${linkTo}`}>
        <div className="py-3 px-6 border button-showmore hover:duration-500 transition">
          {text}
        </div>
      </Link>
    </div>
  );
};

export default CustomButton;
