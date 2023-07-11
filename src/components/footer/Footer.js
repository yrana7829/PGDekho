import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        background: "#FA6E42",
        marginTop: "auto",
      }}
    >
      <Row className="mx-0">
        <Col
          sm={8}
          className="px-5 py-4 text-lg-right text-center text-lg-right"
        >
          <div
            style={{
              fontFamily: "Bahnschrift",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "38px",
              color: "#FFFFFF",
            }}
          >
            © 2023 PG Dekho | All Rights Reserved | Design & Develop by
            BizzeOnline
          </div>
        </Col>
        <Col
          sm={4}
          className="py-4 d-flex align-items-center justify-content-center justify-content-lg-end"
        >
          <div
            style={{
              fontFamily: "Bahnschrift",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "38px",
              color: "#FFFFFF",
              marginLeft: "10px",
              textAlign: "right",
            }}
          >
            <div className="text-center text-md-right">
              <span className="d-inline-block mb-2 mb-sm-0">
                Terms & Conditions
              </span>{" "}
              <span className="d-inline-block px-4">Privacy Policy</span>
            </div>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
