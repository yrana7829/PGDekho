import React, { useState } from "react";
import signupimg from "../assets/image/signupimg.png";
import { Row, Col, Button, Modal } from "react-bootstrap";
import SignInModal from "./SingInModal";
import SignUpDetailedModal from "./SignUpDetailedModal";

const SignUpModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpDetailedModal, setShowSignUpDetailedModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const signUpHandler = () => {
    setShowModal(false);
    setShowSignUpDetailedModal(true);
  };

  const signUpDetailHandler = () => {
    setShowSignUpDetailedModal(false);
  };

  const logInHandler = () => {
    setShowModal(false);
    setShowSignInModal(true);
  };

  const handleCloseSignInModal = () => {
    setShowSignInModal(false);
  };

  return (
    <>
      <button
        className="btn btn-primary signup-button"
        onClick={handleOpenModal}
      >
        Sign Up
      </button>
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", marginTop: "3%" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ height: "500px" }}>
              <div
                className="modal-header d-flex justify-content-end"
                style={{ border: "none" }}
              >
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="signUpModalBody">
                <Row>
                  <Col className="col-6">
                    <img src={signupimg} alt="Image" className="img-fluid" />
                  </Col>
                  <Col className="col-6 signUpSec2">
                    <div
                      className="singup-modal-sec2"
                      style={{ width: "400px" }}
                    >
                      {/* First Row */}
                      <div className="singup-modal-sec21">
                        New Place, New Home!
                        <div className="singup-modal-sec22">
                          Lorem ipsum dolor sit amet consectetur. Neque
                          pellentesque nunc lacus dolor ultricies
                        </div>
                      </div>

                      {/* Fourth Row */}
                      <div style={{ marginTop: "17%" }}>
                        <button
                          className="singup-modal-sec24"
                          style={{ marginLeft: "1.5%" }}
                          onClick={signUpHandler}
                        >
                          Sign Up
                        </button>
                        {/* Third Row */}
                        <button
                          className="singup-modal-sec23"
                          onClick={logInHandler}
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSignInModal && <SignInModal handleClose={handleCloseSignInModal} />}
      {showSignUpDetailedModal && (
        <SignUpDetailedModal handleClose={signUpDetailHandler} />
      )}
    </>
  );
};

export default SignUpModal;
