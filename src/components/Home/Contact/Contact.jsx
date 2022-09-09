import React from "react";
import CustomButton from "../../CustomButton/CustomButton";

const Contact = () => {
  return (
    <div className="h-[40rem] text-center mt-52 md:mt-0" id="contact">
      <p className="mb-5" style={{ textAlign: "center", fontSize: "1rem" }}>
        <span style={{ color: "#95A7EF" }}>#2 Contact</span>
      </p>
      <p style={{ fontSize: "3rem", fontWeight: "600", color: "#EE6352" }}>
        Get In Touch
      </p>
      <div className="grid px-10 md:grid-cols-3 md:px-0 mt-7">
        <p>{/* grid1 */}</p>
        <p style={{ color: "rgba(248, 248, 248, 0.5)" }}>
          My inbox is always open. If you have a question or just want to drop
          by email me, I’ll try my best to get back to you!
        </p>
        <p>{/* grid3 */}</p>
      </div>
      {/* TODO: fix the linkTo for the email, temporary for archive to avoid errors */}
      <CustomButton
        marginTop={"mt-10"}
        text="Drop Message!"
        linkTo={""}
        email={() =>
          window.open(
            "mailto:caramonte159@gmail.com?subject=HELLO&body=Hi%20James%20Dylan%20Caramonte"
          )
        }
      />
    </div>
  );
};

export default Contact;
