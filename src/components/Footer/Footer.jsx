import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="text-center h-[5rem]">
      <p style={{ fontSize: "0.85rem", color: "rgba(248, 248, 248, .5)" }}>
        Designed By:{" "}
        <span
          className="user-style"
          onClick={() =>
            window.open("https://dribbble.com/mikeandrew_30", "_blank")
          }
        >
          Mike Andrew Fernandez
        </span>
      </p>
      <p style={{ fontSize: "0.85rem", color: "rgba(248, 248, 248, .5)" }}>
        Built By:{" "}
        <span
          className="user-style"
          onClick={() =>
            window.open("https://github.com/criticalzero123", "_blank")
          }
        >
          James Dylan Caramonte
        </span>
      </p>
    </div>
  );
};

export default Footer;
