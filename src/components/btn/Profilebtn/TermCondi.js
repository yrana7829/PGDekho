import React from "react";
import { CgFileDocument } from "react-icons/cg";

import "../CircleButton.css";

const TermCondi = ({ onClick, children }) => {
  return (
    <>
      <button
        className="circle-button"
        style={{
          width: "40px",
          backgroundColor: "#f1f1f1",
          marginRight: "20px",
        }}
        onClick={onClick}
      >
        <CgFileDocument />
        {children}
      </button>
    </>
  );
};

export default TermCondi;
