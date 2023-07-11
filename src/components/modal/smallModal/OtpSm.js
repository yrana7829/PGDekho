import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomMuiBtn from "../../btn/CustomMuiBtn";
import "./OtpSm.css";

const OtpSm = ({
  otphandleClose,
  handleVerifyOTP,

  handleClose,
}) => {
  const [open, setOpen] = useState(true);
  const [otp, setOTP] = useState("");

  const handleOTPVerification = () => {
    console.log("Verifying OTP:", otp);
    handleVerifyOTP();
    handleClose();
  };

  const style = {
    marginLeft: "4%",
    marginTop: "20%",
    border: "10x solid red",
    width: "90%",
    bgcolor: "background.paper",
    boxShadow: 24,
    padding: 2,
    paddingBottom: "12%",
    height: "20rem",
    borderRadius: 6,
  };
  return (
    <Modal
      open={open}
      onClose={otphandleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CustomMuiBtn onClick={otphandleClose}>
          <CloseIcon style={{ fontSize: "15px", border: "3px solid orange" }} />
        </CustomMuiBtn>

        <div className="singup-modalotp-sec21" style={{}}>
          OTP Verification
        </div>
        <div className="singup-modalotp-sec21" style={{ fontSize: ".7rem" }}>
          Lorem ipsum dolor sit amet consectetur. Neque pellentesque nunc lacus
          dolor ultricies
        </div>

        <Row style={{ margin: "auto" }}>
          <Col className="col-3">
            <input
              type="text"
              className="form-control custom-inputsm-otp"
              placeholder=""
              maxLength="1"
              value={otp.charAt(0)}
              onChange={(e) => setOTP(e.target.value + otp.slice(1, 4))}
            />
          </Col>
          <Col className="col-3" style={{ scale: 0.2 }}>
            <input
              type="text"
              className="form-control custom-inputsm-otp"
              placeholder=""
              maxLength="1"
              value={otp.charAt(1)}
              onChange={(e) =>
                setOTP(otp.charAt(0) + e.target.value + otp.slice(2, 4))
              }
            />
          </Col>
          <Col className="col-3">
            <input
              type="text"
              className="form-control custom-inputsm-otp"
              placeholder=""
              maxLength="1"
              value={otp.charAt(2)}
              onChange={(e) =>
                setOTP(otp.slice(0, 2) + e.target.value + otp.charAt(3))
              }
            />
          </Col>
          <Col className="col-3">
            <input
              type="text"
              className="form-control custom-inputsm-otp"
              placeholder=""
              maxLength="1"
              value={otp.charAt(3)}
              onChange={(e) => setOTP(otp.slice(0, 3) + e.target.value)}
            />
          </Col>
        </Row>

        <div style={{ marginTop: "1rem" }}>
          <Button
            className="singup-modalotp-sec23"
            style={{ background: "#fa6e42", marginTop: "2%" }}
            onClick={handleOTPVerification}
          >
            Verify OTP
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default OtpSm;
