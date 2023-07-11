import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import { Button, Form } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import PropSearchModal from "../PropSearchModal";
import CustomMuiBtn from "../../btn/CustomMuiBtn";
import "./LocationDetailSm.css";
import CloseIcon from "@mui/icons-material/Close";

const LocationDetailSm = ({ handleClose, open }) => {
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    bgcolor: "background.paper",
    boxShadow: 24,
    height: "28rem",
    borderRadius: 6,
    maxHeight: "100vh",
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="location-sm-container">
          <CustomMuiBtn onClick={handleClose}>
            <CloseIcon style={{ fontSize: "15px" }} />
          </CustomMuiBtn>

          <div className="location-sm-content">
            <div className=" location-sm-21">Your Are Looking To Buy In</div>
            <div className="location-sm-description">
              Lorem ipsum dolor sit amet consectetur. Neque pellentesque nunc
              lacus dolor ultricies
            </div>
            <Form onSubmit={handleSubmit} className="location-sm-form">
              <Form.Group className="location-sm-form-group">
                <Form.Label className="location-sm-label">
                  Enter Location
                </Form.Label>
                <Form.Control
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                  type="text"
                  placeholder="Enter a locality or project/society"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={validateName}
                  className="location-sm-input"
                />
                {nameError && <div className="error-message">{nameError}</div>}
              </Form.Group>
              <div className="location-sm-selected-locations my-2">
                <span className="location-sm-1">
                  Gurugram, Haryana
                  <FaTimes />
                </span>
                <span className="location-sm-2 px-1">
                  Gurugram, Haryana
                  <FaTimes />
                </span>
              </div>
              <div>
                <div className="location-sm-popular">
                  {" "}
                  Popular Localities in New Delhi
                </div>
                <ul className="location-sm-localities-list m-0 p-0">
                  <li className="location-locality m-0 p-0">
                    Gurugram Sector -22
                  </li>
                  <li className="location-locality m-0 p-0">
                    Gurugram Sector - 44
                  </li>
                  <li className="location-locality m-0 p-0">
                    Gurugram Sector - 23
                  </li>
                </ul>
              </div>
              <div className="location-sm-btn">
                <Button
                  onClick={handleReset}
                  style={{ height: "2.4rem", margin: "auto" }}
                  className="btn-button"
                >
                  Reset All
                </Button>{" "}
                <Button
                  className="btn-button "
                  style={{ height: "2.4rem", margin: "auto" }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Next
                </Button>
              </div>
            </Form>
          </div>
        </Box>
      </Modal>
      {nextModalVisible && (
        <PropSearchModal
          handleClose={handleNextModalClose}
          open={nextModalVisible}
        />
      )}
    </>
  );
};

export default LocationDetailSm;
