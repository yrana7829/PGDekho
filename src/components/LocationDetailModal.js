import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import signupimg from "../assets/image/signupimg.png";
import { FaTimes } from "react-icons/fa";

const LocationDetailModal = ({ handleClose }) => {
  const [profession, setProfession] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

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
    <Modal show={true} onHide={handleClose} style={{ marginTop: "5%" }}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="col-6">
            <img src={signupimg} alt="Image" className="img-fluid" />
          </Col>
          <Col className="col-6">
            <div className="singup-modal-sec21">
              Your Are Looking To Buy In
              <div className="singup-modal-sec22">
                {" "}
                Lorem ipsum dolor sit amet consectetur. Neque pellentesque nunc
                lacus dolor ultricies
              </div>
            </div>
            <Form
              onSubmit={handleSubmit}
              style={{ marginTop: "15%", marginLeft: "5%" }}
            >
              <Form.Group>
                <Form.Label style={{ marginTop: "2%" }}>
                  <h6>Enter Location</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a locality or project/society"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={validateName}
                  style={{ height: "56.84px" }}
                />
                {nameError && <div className="error-message">{nameError}</div>}
              </Form.Group>
              <div>
                <span className="location-1">
                  Gurugram, Haryana
                  <FaTimes />
                </span>
                <span className="location-1" style={{ marginLeft: "19%" }}>
                  Gurugram, Haryana
                  <FaTimes />
                </span>
              </div>
              <div className="localities">
                <h6>Popular Localities in New Delhi</h6>

                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li> Gurugram Sector -22</li>

                  <li>Gurugram Sector - 44,</li>
                  <li> Gurugram Sector - 23, </li>
                </ul>
              </div>

              <div className="text-center" style={{ marginTop: "64%" }}>
                {" "}
                <Button
                  variant="primary"
                  onClick={handleReset}
                  style={{
                    marginRight: "30px",
                    marginLeft: "",

                    background: " #DFDFDF",
                    color: "#090909",
                  }}
                >
                  Reset All
                </Button>{" "}
                <Button
                  style={{
                    width: "calc(33.33% - 30px)",
                    marginLeft: "%",
                    background: "#fa6e42",
                  }}
                  type="submit"
                >
                  Next
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default LocationDetailModal;
