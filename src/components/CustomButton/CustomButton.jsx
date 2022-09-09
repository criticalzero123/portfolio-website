import React from "react";

import { Link } from "react-router-dom";

import "./CustomButton.css";

const CustomButton = ({ marginTop, text, linkTo, email }) => {
  return (
    <div className={`${marginTop} flex justify-center`}>
      {linkTo != "" ? (
        <Link to={`/${linkTo}`}>
          <div className="py-3 px-6 border button-showmore hover:duration-500 transition">
            {text}
          </div>
        </Link>
      ) : (
        <div
          className="py-3 px-6 border button-showmore hover:duration-500 transition"
          onClick={email}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default CustomButton;
