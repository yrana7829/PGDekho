import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import "../CircleButton.css";

const ContactUs = ({ onClick, children }) => {
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
      <TfiHeadphoneAlt />
      {children}
    </button>
  );
};

export default ContactUs;
