import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

import "../CircleButton.css";

const AboutUs = ({ onClick, children }) => {
  return (
    <button
      className="circle-button"
      style={{
        width: "40px",
        backgroundColor: "#f1f1f1",
        marginRight: "20px",
      }}
      onClick={onClick}
    >
      <RiErrorWarningLine />
      {children}
    </button>
  );
};

export default AboutUs;
