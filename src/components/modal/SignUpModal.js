import React, { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Col, Row } from "react-bootstrap";
import SignInModal from "./SingInModal";
import SignUpDetailedModal from "./SignUpDetailedModal";
import ModalImages from "./modalimages/ModalImages";
import CustomMuiBtn from "../btn/CustomMuiBtn";
import SignUpSmall from "./smallModal/SignUpSmall";

const SignUpModal = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpDetailedModal, setShowSignUpDetailedModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const signUpHandler = () => {
    setShowSignUpDetailedModal(true);
    handleClose();
  };

  const signUpDetailHandler = () => {
    setShowSignUpDetailedModal(false);
    handleClose(); // Update the open state in the parent component
  };

  const logInHandler = () => {
    handleClose();

    setShowSignInModal(true);
  };

  const handleCloseSignInModal = () => {
    setShowSignInModal(false);
    handleClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 862,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    height: 500,
    borderRadius: 6,
    overflowY: "hidden",
  };

  return (
    <>
      {!isSmallScreen ? (
        <>
          <button
            className="btn btn-primary signup-button"
            onClick={handleOpen}
          >
            Sign Up
          </button>
          <div>
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
                <Row className="mt-4">
                  <Col className="Col-6 bshadow">
                    <div className="bshadow" style={{}}>
                      {" "}
                      <ModalImages />
                    </div>
                  </Col>
                  <Col
                    className="Col-6"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="singup-modal-sec2"
                      style={{
                        width: "400px",
                        marginLeft: "5%",
                        marginTop: "1%",
                      }}
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
              </Box>
            </Modal>
            {showSignInModal && (
              <SignInModal handleClose={handleCloseSignInModal} />
            )}
            {showSignUpDetailedModal && (
              <SignUpDetailedModal handleClose={signUpDetailHandler} />
            )}
          </div>
        </>
      ) : (
        <SignUpSmall />
      )}
    </>
  );
};

export default SignUpModal;
