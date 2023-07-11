import React, { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material";
import { Button, Form, Row, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "./FilterModal.css";
import CustomMuiBtn from "../btn/CustomMuiBtn";

import CloseIcon from "@mui/icons-material/Close";

import PriceScroller from "./PriceScroller";

const FilterModal = ({}) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [nextModalVisible, setNextModalVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const validateName = () => {
    if (name.trim() === "") {
      setNameError("Please enter your name.");
    } else {
      setNameError("");
    }
  };
  const handleClose = () => {
    setOpen(false);
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
    width: 862,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    height: 500,
    borderRadius: 6,
    overflow: "hidden",
  };

  return (
    <>
      {/* {isSmallScreen ? (
          <LocationDetailSm open={open} handleClose={handleClose} />
        ) : ( */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ border: "none" }}
      >
        <Box sx={style}>
          <CustomMuiBtn onClick={handleClose}>
            <CloseIcon style={{ fontSize: "15px" }} />
          </CustomMuiBtn>

          <Row className="">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <h4>Filters</h4>
            </div>
            <Col className="Col-6 bshadow">
              <div className="bshadow" style={{}}>
                <div style={{ marginTop: "7%", marginLeft: "4%" }}>
                  <h6>Property Type</h6>
                  <div className="my-3">
                    <Button className="prop-btn filter-pro-btn">ALL</Button>
                    <Button className="prop-btn filter-pro-btn">PG</Button>
                    <Button className="prop-btn filter-pro-btn">RK</Button>
                    <Button className="prop-btn filter-pro-btn">1BHK</Button>
                    <Button className="prop-btn filter-pro-btn">2BHK</Button>
                  </div>
                </div>
                <div>
                  <h6 style={{ marginLeft: "3%" }}>Price</h6>
                  <div style={{ marginTop: "-.5rem", paddingRight: "1.5rem" }}>
                    <PriceScroller />
                  </div>
                </div>
                <div style={{ marginTop: "2%", marginLeft: "3%" }}>
                  <h6>Gender</h6>
                  <Button className="prop-btn filter-sm-btn">Male</Button>
                  <Button className="prop-btn filter-sm-btn">Female</Button>
                  <Button className="prop-btn filter-sm-btn">Coed</Button>
                </div>
              </div>
            </Col>

            {/* Second Col */}

            <Col className="col-6">
              <div style={{ marginTop: "7%", marginLeft: "4%" }}>
                <h6>Availability</h6>
                <div className="my-3">
                  <Button className="prop-btn filter-sm-btn" style={{}}>
                    Immediate
                  </Button>
                  <Button className="prop-btn filter-sm-btn" style={{}}>
                    Within 15 days
                  </Button>
                  <Button className="prop-btn filter-sm-btn" style={{}}>
                    Coed
                  </Button>
                </div>
              </div>
              <div style={{ marginTop: "-3%", marginLeft: "4%" }}>
                <h6>Furnishing</h6>
                <div className="my-3">
                  <Button className="prop-btn filter-sm-btn" style={{}}>
                    Full
                  </Button>
                  <Button className="prop-btn filter-sm-btn" style={{}}>
                    Semi
                  </Button>
                  <Button className="prop-btn filter-sm-btn" style={{}}>
                    None
                  </Button>
                </div>
              </div>
              <div style={{ marginTop: "-2%", marginLeft: "4%" }}>
                <h6>Floors</h6>
                <div className="my-3">
                  <Row>
                    <div>
                      {" "}
                      <Button className="prop-btn filter-sm-btn" style={{}}>
                        Ground
                      </Button>
                      <Button className="prop-btn filter-sm-btn" style={{}}>
                        1 or 3
                      </Button>
                      <Button className="prop-btn filter-sm-btn" style={{}}>
                        4 or 6
                      </Button>
                    </div>
                    <div>
                      {" "}
                      <Button className="prop-btn filter-sm-btn" style={{}}>
                        7 or 9
                      </Button>
                      <Button className="prop-btn filter-sm-btn" style={{}}>
                        10 & Above
                      </Button>
                      <Button className="prop-btn filter-sm-btn" style={{}}>
                        Custom
                      </Button>
                    </div>
                  </Row>
                </div>
              </div>
            </Col>
            <div
              className="text-center"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button
                onClick={handleReset}
                style={{
                  width: "20%",
                  marginTop: "0",
                  color: "#090909",
                  background: "none",
                  border: "none",
                  justifyContent: "start",
                }}
              >
                Reset All
              </Button>

              <Button
                className="btn-button"
                style={{ marginLeft: "2%", height: "40px" }}
              >
                Show Properties
              </Button>
            </div>
          </Row>
        </Box>
      </Modal>
      {/* )} */}
      {/* {nextModalVisible && (
        <PropSearchModal
          handleClose={handleNextModalClose}
          open={nextModalVisible}
        />
      )} */}
    </>
  );
};

export default FilterModal;
