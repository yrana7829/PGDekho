import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Modal, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PriceScroller from "../PriceScroller";
import "./PropSearchSm.css";

import CustomMuiBtn from "../../btn/CustomMuiBtn";

import CloseIcon from "@mui/icons-material/Close";

const PropSearchSm = ({ handleClose }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleReset = () => {
    // Reset logic here
  };

  const handleSkip = () => {
    handleClose(); // Close the modal without saving
    // navigate("/"); // Navigate to the home page
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
      {
        <div>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <CustomMuiBtn onClick={handleClose}>
                <CloseIcon style={{ fontSize: "15px" }} />
              </CustomMuiBtn>
              <Row className="" style={{}}>
                <Col className="px-5" style={{}}>
                  <div
                    className="search-sm-sec21"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "700",
                      fontSize: "15px",
                      margin: "auto",
                    }}
                  >
                    Just Fill Out These Last Few Details
                  </div>
                  <div className="prop-sm-sec22">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                  <div style={{ marginTop: "1%" }}>
                    <h6>Property Type</h6>
                    <div className="prop-sm-23 ">
                      <Button className="prop-btn  ">ALL</Button>
                      <Button className="prop-btn ">PG</Button>
                      <Button className="prop-btn ">RK</Button>
                      <Button className="prop-btn ">1BHK</Button>
                      <Button className="prop-btn ">2BHK</Button>
                    </div>
                  </div>
                  <div>
                    <h6 style={{ marginLeft: "3%" }}>Price</h6>
                    <div style={{ marginTop: "-3rem" }}></div>
                    <PriceScroller />
                  </div>
                  <div style={{ marginTop: "-4%", marginLeft: "3%" }}>
                    <h6>Gender</h6>
                    <div style={{ marginTop: "-2%" }}>
                      <Button
                        className="prop-btn"
                        style={{ width: "28%", height: "35px" }}
                      >
                        Male
                      </Button>
                      <Button
                        className="prop-btn"
                        style={{ width: "28%", height: "35px" }}
                      >
                        Female
                      </Button>
                      <Button
                        className="prop-btn"
                        style={{ width: "28%", height: "35px" }}
                      >
                        Coed
                      </Button>
                    </div>
                  </div>
                  <div style={{ marginLeft: "3%" }}>
                    <h6>Number Of Bedrooms</h6>
                    <Button
                      className="prop-btn "
                      style={{ width: "28%", height: "35px" }}
                    >
                      1 bed
                    </Button>
                    <Button
                      className="prop-btn"
                      style={{ width: "28%", height: "35px" }}
                    >
                      2 bed
                    </Button>
                    <Button
                      className="prop-btn"
                      style={{ width: "28%", height: "35px" }}
                    >
                      3 bed
                    </Button>
                  </div>

                  <div
                    className="pro-sm-btn"
                    style={{ scale: "1", display: "flex" }}
                  >
                    <Button
                      onClick={handleReset}
                      style={{
                        marginTop: "0",
                        color: "#090909",
                        background: "none",
                        border: "none",
                      }}
                    >
                      Reset All
                    </Button>
                    <Button
                      onClick={handleSkip}
                      className="btn-button px-2"
                      style={{ marginTop: "1rem" }}
                    >
                      Skip
                    </Button>
                    <Link to="/all-properties">
                      <Button
                        className="btn-button  mx-2"
                        style={{
                          fontSize: ".8rem",
                          fontWeight: "700",
                          width: "8rem",
                          marginTop: "1rem",
                        }}
                      >
                        Show Properties
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Box>
          </Modal>
        </div>
      }
    </>
  );
};

export default PropSearchSm;
