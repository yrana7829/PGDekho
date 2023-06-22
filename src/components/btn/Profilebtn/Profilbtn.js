import React from "react";
import { FiUser } from "react-icons/fi";

import "../CircleButton.css";

const Profilebtn = ({ onClick, children }) => {
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
      <FiUser />
      {children}
    </button>
  );
};

export default Profilebtn;
