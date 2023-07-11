import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import LoginWithIds from "../LoginWithIds";
import OtpModal from "../OtpModal";
import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomMuiBtn from "../../btn/CustomMuiBtn";
import "../smallModal/LogInSmall.css";
import OtpSm from "./OtpSm";

const LogInSmall = ({ handleClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(true); // Added 'open' variable

  const handleSigninClose = () => {
    handleClose();
  };

  const handleSignIn = () => {
    // check if the phone number is valid
    if (!phoneNumberIsValid(phoneNumber)) {
      setError("Please enter a valid mobile number"); // Set the error message
      return; // Return early if phone number is not valid
    }

    console.log("Signing in with phone number:", phoneNumber);
    setShowOTPModal(true);
  };

  // Phone number validation code
  const phoneNumberIsValid = (number) => {
    return /^\d{10}$/.test(number); // Example: Validate if the number is exactly 10 digits
  };

  const handleVerifyOTP = () => {
    console.log("Verifying OTP:", otp);
    // Perform the necessary verification logic
    setShowOTPModal(false);
  };

  const handleOTPModalClose = () => {
    setShowOTPModal(false);
  };

  const style = {
    marginLeft: "4%",
    marginTop: "20%",

    width: "90%",
    bgcolor: "background.paper",
    boxShadow: 24,
    padding: 1,
    paddingBottom: "12%",
    height: "23rem",
    borderRadius: 6,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CustomMuiBtn onClick={handleClose}>
            <CloseIcon style={{ fontSize: "15px" }} />
          </CustomMuiBtn>

          <Row className="">
            <Col className="custom-sm-input">
              <div className="singup-sm-sec2" style={{}}>
                <div className="singup-sm-sec21">Welcome Back!</div>
                <div className="singup-sm-sec22">
                  Lorem ipsum dolor sit amet consectetur. Neque pellentesque
                  nunc lacus dolor ultricies
                </div>
                <div style={{}}>
                  <input
                    type="text"
                    style={{}}
                    className="form-control custom-sm-input"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                {error && <div style={{ color: "red" }}>{error}</div>}{" "}
                {/* Display error message if there's an error */}
                <div style={{ marginTop: "1rem" }}>
                  <Button
                    style={{
                      background: "#fa6e42",
                    }}
                    onClick={handleSignIn}
                    className="sinin-sm-sec23 singup-sm-sec23"
                  >
                    Sign In
                  </Button>
                </div>
                <div className="signModalBoder" style={{ marginTop: "1rem" }}>
                  <div className="signModalLoginWith " style={{ scale: ".6" }}>
                    Or Login With
                  </div>
                </div>
                <div className="id-sec" style={{ scale: ".7" }}>
                  <LoginWithIds />
                </div>
              </div>
            </Col>
          </Row>

          {showOTPModal && (
            <OtpSm
              handleClose={handleSigninClose}
              otphandleClose={handleOTPModalClose}
              handleVerifyOTP={handleVerifyOTP}
              otp={otp}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default LogInSmall;
