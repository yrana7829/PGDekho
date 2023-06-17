import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import signupimg from "../assets/image/signupimg.png";
import LocationDetailModal from "./LocationDetailModal";

const SignUpDetailedModal = ({ handleClose }) => {
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

  const validateProfession = () => {
    if (profession.trim() === "") {
      setProfessionError("Please enter your profession.");
    } else {
      setProfessionError("");
    }
  };

  const locationHandler = () => {
    setLocationDetail(true);
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

  return (
    <>
      <Modal show={true} onHide={handleClose} style={{ marginTop: "5%" }}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="col-6">
              <img src={signupimg} alt="Image" className="img-fluid" />
            </Col>
            <Col className="col-6">
              <div className="singup-modal-sec21">
                Let’s Know You Better
                <div className="singup-modal-sec22">
                  Lorem ipsum dolor sit amet consectetur. Neque pellentesque
                  nunc lacus dolor ultricies
                </div>
              </div>
              <Form
                onSubmit={handleSubmit}
                style={{ marginTop: "15%", marginLeft: "5%" }}
              >
                <Form.Group>
                  <Form.Label style={{ marginTop: "1%" }}>
                    <h6>I am an</h6>
                  </Form.Label>
                  <div>
                    <Button
                      variant="secondary"
                      onClick={() => setProfession("Individual")}
                      active={profession === "Individual"}
                      style={{
                        marginRight: "10px",
                        background: "#F5F4F8",
                        color: "black",
                      }}
                    >
                      Individual
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => setProfession("Agent")}
                      active={profession === "Agent"}
                      style={{ marginLeft: "50px", background: "#fa6e42" }}
                    >
                      Agent
                    </Button>
                  </div>
                  {professionError && (
                    <div className="error-message">{professionError}</div>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label style={{ marginTop: "2%" }}>
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
                  <Form.Label style={{ marginTop: "2%" }}>
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
                  <Form.Label style={{ marginTop: "2%" }}>
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
                    style={{ marginTop: "1%" }}
                  />
                  {termsError && (
                    <div className="error-message">{termsError}</div>
                  )}
                </Form.Group>

                <div className="text-center" style={{ marginTop: "5%" }}>
                  <Button
                    variant="primary"
                    onClick={handleReset}
                    style={{
                      marginRight: "30px",
                      marginLeft: "-25%",
                      background: " #DFDFDF",
                      color: "#090909",
                    }}
                  >
                    Reset All
                  </Button>{" "}
                  <Button
                    variant="primary"
                    onClick={handleSkip}
                    style={{
                      marginRight: "30px",
                      background: " #DFDFDF",
                      color: "#090909",
                    }}
                  >
                    Skip
                  </Button>{" "}
                  <Button
                    style={{
                      width: "calc(33.33% - 30px)",
                      marginTop: "",
                      background: "#fa6e42",
                    }}
                    type="submit"
                    onClick={locationHandler}
                  >
                    Next
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      {LocationDetail && <LocationDetailModal handleClose={handleClose} />}
    </>
  );
};

export default SignUpDetailedModal;
