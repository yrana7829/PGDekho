import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import signupimg from "../assets/image/signupimg.png";
import { FaTimes } from "react-icons/fa";
import PriceScroller from "./PriceScroller";

const PropSearchModal = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [propSearch, setPropSearch] = useState(false);

  const validateName = () => {
    if (name.trim() === "") {
      setNameError("Please enter your name.");
    } else {
      setNameError("");
    }
  };

  const propHandler = () => {
    setPropSearch(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateName();

    if (!nameError) {
      console.log("Form submitted!");
      handleClose(); // Close the modal after successful submission
    }
  };

  const handleReset = () => {
    setName("");
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
                <h4>Just Fill Out These Last Few Details</h4>
                <div className="singup-modal-sec22">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>
              <div style={{ marginTop: "5%", marginLeft: "3%" }}>
                <h6>Property Type</h6>
                <Button className="prop-btn">ALL</Button>
                <Button className="prop-btn">PG</Button>
                <Button className="prop-btn">RK</Button>
                <Button className="prop-btn">1BHK</Button>
                <Button className="prop-btn">2BHK</Button>
              </div>
              <div>
                <h6 style={{ marginLeft: "3%" }}>Price</h6>
                <div style={{ marginTop: "5%" }}>
                  <PriceScroller />
                </div>
              </div>
              <div style={{ marginTop: "2%", marginLeft: "3%" }}>
                <h6>Gender</h6>
                <Button
                  className="prop-btn "
                  style={{ width: "28%", height: "45px" }}
                >
                  Male
                </Button>
                <Button
                  className="prop-btn"
                  style={{ width: "28%", height: "45px" }}
                >
                  Female
                </Button>
                <Button
                  className="prop-btn"
                  style={{ width: "28%", height: "45px" }}
                >
                  Coed
                </Button>
              </div>
              <div style={{ marginTop: "1%", marginLeft: "3%" }}>
                <h6>Number Of Bedrooms</h6>
                <Button
                  className="prop-btn "
                  style={{ width: "28%", height: "45px" }}
                >
                  1 bed
                </Button>
                <Button
                  className="prop-btn"
                  style={{ width: "28%", height: "45px" }}
                >
                  2 bed
                </Button>
                <Button
                  className="prop-btn"
                  style={{ width: "28%", height: "45px" }}
                >
                  3 bed
                </Button>
              </div>

              <div className="text-center" style={{ marginTop: "1%" }}>
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
                  onClick={propHandler}
                >
                  Next
                </Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PropSearchModal;
