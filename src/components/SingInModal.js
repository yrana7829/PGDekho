import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import signupimg from "../assets/image/signupimg.png";
import LoginWithIds from "./LoginWithIds";
import OtpModal from "./OtpModal";

const SignInModal = ({ handleClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");

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
    // Implement your validation logic here
    // Return true if the number is valid, false otherwise
    // You can use regular expressions or any other validation method
    return /^\d{10}$/.test(number); // Example: Validate if the number is exactly 10 digits
  };

  const handleVerifyOTP = () => {
    console.log("Verifying OTP:", otp);
    // Perform the necessary verification logic
    setShowOTPModal(false);
    handleClose();
  };

  const handleOTPModalClose = () => {
    setShowOTPModal(false);
  };

  return (
    <Modal
      show={true}
      onHide={handleClose}
      centered
      style={{ marginTop: "3%" }}
    >
      <Modal.Header closeButton></Modal.Header>
      <div className="signUpModalBody" style={{ height: "500px" }}>
        <Row>
          <Col className="col-6">
            <img src={signupimg} alt="Image" className="img-fluid" />
          </Col>
          <Col className="col-6 signUpSec2 d-flex justify-content-center align-items-center">
            <div className="singup-modal-sec2" style={{ width: "400px" }}>
              <div className="singup-modal-sec21">
                Welcome Back!
                <div className="singup-modal-sec22">
                  Lorem ipsum dolor sit amet consectetur. Neque pellentesque
                  nunc lacus dolor ultricies
                </div>
              </div>

              <div style={{ marginTop: "10%" }}>
                <input
                  type="text"
                  style={{ marginLeft: "5%" }}
                  className="form-control custom-input"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div style={{ marginTop: "1rem" }}>
                <Button
                  className="singup-modal-sec23"
                  style={{ background: "#fa6e42", marginTop: "-5%" }}
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
              </div>

              <div className="signModalBoder" style={{}}>
                <div className="signModalLoginWith">Or Login With</div>
              </div>

              <div style={{ marginLeft: "10%" }}>
                <LoginWithIds />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {showOTPModal && (
        <OtpModal
          handleClose={handleOTPModalClose}
          handleVerifyOTP={handleVerifyOTP}
          otp={otp}
          setOTP={setOTP}
        />
      )}
    </Modal>
  );
};

export default SignInModal;
