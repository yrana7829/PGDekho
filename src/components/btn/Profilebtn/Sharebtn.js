import React from "react";
import { BsShareFill } from "react-icons/bs";

import "../CircleButton.css";

const Sharebtn = ({ onClick, children }) => {
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
      <BsShareFill />
      {children}
    </button>
  );
};

export default Sharebtn;
