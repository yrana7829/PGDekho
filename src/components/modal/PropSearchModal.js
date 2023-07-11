import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Modal, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PriceScroller from "./PriceScroller";
import PropSearchSm from "./smallModal/PropSearchSm";
import CustomMuiBtn from "../btn/CustomMuiBtn";
import ModalImages from "./modalimages/ModalImages";
import CloseIcon from "@mui/icons-material/Close";

const PropSearchModal = ({ handleClose }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
    width: 900,
    bgcolor: "background.paper",
    boxShadow: 24,
    height: 580,
    borderRadius: 6,
    overflow: "hidden",
  };

  return (
    <>
      {" "}
      {isSmallScreen ? (
        <PropSearchSm open={open} handleClose={handleClose} />
      ) : (
        <div>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <CustomMuiBtn onClick={handleClose}>
                <CloseIcon style={{ fontSize: "15px" }} />
              </CustomMuiBtn>
              <Row className="" style={{ marginTop: "3%" }}>
                <Col className="col-6" style={{ marginTop: "3%" }}>
                  <ModalImages />
                </Col>
                <Col className="col-6 px-2" style={{ marginTop: "2%" }}>
                  <div
                    className="singup-modal-sec21"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "700",
                      fontSize: "20px",
                    }}
                  >
                    Just Fill Out These Last Few Details
                    <div className="singup-modal-sec22">
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div style={{ marginTop: "7%", marginLeft: "4%" }}>
                    <h6>Property Type</h6>
                    <Button
                      className="prop-btn"
                      style={{ padding: ".2rem 2rem" }}
                    >
                      ALL
                    </Button>
                    <Button
                      className="prop-btn"
                      style={{ padding: ".2rem 2rem" }}
                    >
                      PG
                    </Button>
                    <Button
                      className="prop-btn"
                      style={{ padding: ".2rem 2rem" }}
                    >
                      RK
                    </Button>
                    <Button
                      className="prop-btn"
                      style={{ padding: ".2rem 2rem" }}
                    >
                      1BHK
                    </Button>
                    <Button
                      className="prop-btn"
                      style={{ padding: ".2rem 2rem" }}
                    >
                      2BHK
                    </Button>
                  </div>
                  <div>
                    <h6 style={{ marginLeft: "3%" }}>Price</h6>
                    <div
                      style={{ marginTop: "-1.5rem", paddingRight: "1.5rem" }}
                    >
                      <PriceScroller />
                    </div>
                  </div>
                  <div style={{ marginTop: "-2%", marginLeft: "3%" }}>
                    <h6>Gender</h6>
                    <Button
                      className="prop-btn"
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
                      className="prop-btn"
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

                  <div className="text-center" style={{ marginTop: "5%" }}>
                    <Button
                      onClick={handleReset}
                      style={{
                        width: "20%",
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
                      className="btn-button"
                      style={{ marginLeft: "6%", marginTop: "0" }}
                    >
                      Skip
                    </Button>
                    <Link to="/all-properties">
                      <Button
                        className="btn-button"
                        style={{ marginLeft: "6%", marginTop: "0" }}
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
      )}
    </>
  );
};

export default PropSearchModal;
