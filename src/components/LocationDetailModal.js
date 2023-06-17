import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import signupimg from "../assets/image/signupimg.png";
import { FaTimes } from "react-icons/fa";
import PropSearchModal from "./PropSearchModal";

const LocationDetailModal = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [nextModalVisible, setNextModalVisible] = useState(false);

  const validateName = () => {
    if (name.trim() === "") {
      setNameError("Please enter your name.");
    } else {
      setNameError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateName();

    if (!nameError) {
      console.log("Form submitted!");
      setNextModalVisible(true);
    }
  };

  const handleReset = () => {
    setName("");
  };

  const handleSkip = () => {
    handleClose(); // Close the modal without saving
  };

  const handleNextModalClose = () => {
    setNextModalVisible(false);
    handleClose();
  };

  return (
    <>
      <Modal
        show={!nextModalVisible}
        onHide={handleClose}
        style={{ marginTop: "5%", border: "2px yellow solid" }}
      >
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
                  Lorem ipsum dolor sit amet consectetur. Neque pellentesque
                  nunc lacus dolor ultricies
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
                  {nameError && (
                    <div className="error-message">{nameError}</div>
                  )}
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
                    <li>Gurugram Sector -22</li>
                    <li>Gurugram Sector - 44,</li>
                    <li>Gurugram Sector - 23, </li>
                  </ul>
                </div>
                <div className="text-center" style={{ marginTop: "64%" }}>
                  <Button
                    variant="primary"
                    onClick={handleReset}
                    style={{
                      marginRight: "30px",
                      marginLeft: "",
                      background: "#DFDFDF",
                      color: "#090909",
                    }}
                  >
                    Reset All
                  </Button>{" "}
                  <Button
                    style={{
                      width: "calc(33.33% - 30px)",
                      marginLeft: "30px",
                      background: "#fa6e42",
                    }}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Next
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      {nextModalVisible && (
        <PropSearchModal handleClose={handleNextModalClose} />
      )}
    </>
  );
};

export default LocationDetailModal;
