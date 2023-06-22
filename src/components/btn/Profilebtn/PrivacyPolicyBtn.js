import React from "react";
import { MdOutlinePrivacyTip } from "react-icons/md";

import "../CircleButton.css";

const PrivacyPolicyBtn = ({ onClick, children }) => {
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
      <MdOutlinePrivacyTip />
      {children}
    </button>
  );
};

export default PrivacyPolicyBtn;
