import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import LocationDetailModal from "../LocationDetailModal";
import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomMuiBtn from "../../btn/CustomMuiBtn";
import "./SignUpDetailedsm.css";

const SignUpDetailedsm = ({ handleClose }) => {
  const [profession, setProfession] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [LocationDetail, setLocationDetail] = useState(false);

  const [professionError, setProfessionError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [termsError, setTermsError] = useState("");

  const [currentModal, setcurrentModal] = useState(true);
  const [open, setOpen] = useState(true);

  const validateProfession = () => {
    if (profession.trim() === "") {
      setProfessionError("Please enter your profession.");
    } else {
      setProfessionError("");
    }
  };

  const locationHandler = () => {
    setLocationDetail(true);
    setcurrentModal(false);
  };

  const validateName = () => {
    if (name.trim() === "") {
      setNameError("Please enter your name.");
    } else {
      setNameError("");
    }
  };

  const validateEmail = () => {
    if (email.trim() === "") {
      setEmailError("Please enter your email.");
    } else {
      setEmailError("");
    }
  };

  const validateNumber = () => {
    if (number.trim() === "") {
      setNumberError("Please enter your mobile number.");
    } else {
      setNumberError("");
    }
  };

  const validateTerms = () => {
    if (!termsChecked) {
      setTermsError("Please agree to the terms and conditions.");
    } else {
      setTermsError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateProfession();
    validateName();
    validateEmail();
    validateNumber();
    validateTerms();

    if (
      !professionError &&
      !nameError &&
      !emailError &&
      !numberError &&
      !termsError
    ) {
      console.log("Form submitted!");
      handleClose(); // Close the modal after successful submission
    }
  };

  const handleReset = () => {
    setProfession("");
    setName("");
    setEmail("");
    setNumber("");
    setTermsChecked(false);
  };

  const handleSkip = () => {
    handleClose(); // Close the modal without saving
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    bgcolor: "background.paper",
    boxShadow: 24,
    height: "auto",
    borderRadius: 6,

    maxHeight: "100vh",
  };

  return (
    <>
      {currentModal && (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="detail-sm">
              <CustomMuiBtn onClick={handleClose}>
                <CloseIcon style={{ fontSize: "15px" }} />
              </CustomMuiBtn>
              <Row className="d-flex justify-content-center align-items-center">
                <div className="detail-sm-col">
                  <Form
                    className="detail-sm-form"
                    onSubmit={handleSubmit}
                    style={{ margin: "0 auto", marginTop: "12%" }}
                  >
                    <div className="singup-modal-sec21 detail-sm-21">
                      Let’s Know You Better
                    </div>
                    <div
                      className="singup-modal-sec22"
                      style={{
                        margin: "auto",
                        fontSize: ".6rem",
                        width: "80%",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Neque pellentesque
                      nunc lacus dolor ultricies
                    </div>
                    <Col className="detail-sm-22 ">
                      <Form.Group className="">
                        <Form.Label style={{ marginLeft: "6px" }}>
                          <h6>I am an</h6>
                        </Form.Label>
                        <div>
                          <Button
                            variant="secondary"
                            onClick={() => setProfession("Individual")}
                            active={profession === "Individual"}
                            style={{
                              background: "#F5F4F8",
                              color: "black",
                              scale: ".8",
                            }}
                          >
                            Individual
                          </Button>
                          <Button
                            className="mx-1 "
                            variant="secondary"
                            onClick={() => setProfession("Agent")}
                            active={profession === "Agent"}
                            style={{ background: "#fa6e42", scale: ".8" }}
                          >
                            Agent
                          </Button>
                        </div>
                        {professionError && (
                          <div className="error-message">{professionError}</div>
                        )}
                      </Form.Group>

                      <Form.Group>
                        <Form.Label
                          style={{}}
                          className="detail-sm-23 px-0 mx-0 "
                        >
                          <h6>Your Name</h6>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onBlur={validateName}
                        />
                        {nameError && (
                          <div className="error-message">{nameError}</div>
                        )}
                      </Form.Group>

                      <Form.Group>
                        <Form.Label
                          style={{ marginLeft: "6px" }}
                          className="detail-sm-23"
                        >
                          <h6>Email</h6>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={validateEmail}
                        />
                        {emailError && (
                          <div className="error-message">{emailError}</div>
                        )}
                      </Form.Group>

                      <Form.Group>
                        <Form.Label
                          style={{ marginLeft: "-3px" }}
                          className="detail-sm-23"
                        >
                          <h6>Mobile Number</h6>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Number"
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          onBlur={validateNumber}
                        />
                        {numberError && (
                          <div className="error-message">{numberError}</div>
                        )}
                      </Form.Group>

                      <Form.Group>
                        <Form.Check
                          type="checkbox"
                          label="I agree to the terms and conditions"
                          checked={termsChecked}
                          onChange={(e) => setTermsChecked(e.target.checked)}
                          onBlur={validateTerms}
                          style={{ marginTop: "" }}
                        />
                        {termsError && (
                          <div className="error-message">{termsError}</div>
                        )}
                      </Form.Group>

                      <div
                        className="w-100 detail-sm-24 "
                        style={{ marginTop: "5%" }}
                      >
                        <Button
                          onClick={handleReset}
                          style={{
                            width: "25%",
                            marginTop: "0",
                            color: "#090909",
                            background: "none",
                            border: "none",
                            scale: ".9",
                          }}
                        >
                          Reset All
                        </Button>
                        <Button
                          variant="primary"
                          onClick={handleSkip}
                          className="btn-button"
                          style={{
                            marginTop: "0",
                            scale: ".6",
                          }}
                        >
                          Skip
                        </Button>{" "}
                        <Button
                          className="btn-button"
                          style={{
                            marginTop: "0",
                            width: "156px",
                            scale: ".6",
                          }}
                          type="submit"
                          onClick={locationHandler}
                        >
                          Next
                        </Button>
                      </div>
                    </Col>
                  </Form>
                </div>
              </Row>
            </Box>
          </Modal>
        </div>
      )}

      {LocationDetail && (
        <LocationDetailModal handleClose={handleClose} open={LocationDetail} />
      )}
    </>
  );
};

export default SignUpDetailedsm;
