import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Col, Row } from "react-bootstrap";
import CustomMuiBtn from "../../btn/CustomMuiBtn";
import SignInModal from "../SingInModal";
import SignUpDetailedModal from "../SignUpDetailedModal";
import "./SignUpSmall.css";

const SignUpSmall = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpDetailedModal, setShowSignUpDetailedModal] = useState(false);
  const [open, setOpen] = useState(false);

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
    top: "50%",
    left: "50%",
    transform: "translate(20%, 30%)",
    width: "calc(70% - 1rem)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 6,
    height: "auto",
    borderRadius: 6,
  };

  return (
    <>
      <button className="btn btn-primary signup-button" onClick={handleOpen}>
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
            <Row className="">
              <Col
                className="Col-12 "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="singup-sm-sec2 " style={{}}>
                  {/* First Row */}
                  <div className="singup-sm-sec21">New Place, New Home!</div>
                  <div className="singup-sm-sec22 ">
                    Lorem ipsum dolor sit amet consectetur. Neque pellentesque
                    nunc lacus dolor ultricies
                  </div>

                  {/* Fourth Row */}
                  <div className="btn-sec" style={{}}>
                    <button
                      className="singup-sm-sec24"
                      onClick={signUpHandler}
                      style={{}}
                    >
                      Sign Up
                    </button>
                    {/* Third Row */}
                    <button className="singup-sm-sec23" onClick={logInHandler}>
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
  );
};

export default SignUpSmall;
