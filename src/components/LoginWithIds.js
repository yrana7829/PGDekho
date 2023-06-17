import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

const LoginWithIds = () => {
  const handleFacebookLogin = () => {
    // Redirect to Facebook login page
    window.location.href = "https://www.facebook.com/login";
  };

  const handleGoogleLogin = () => {
    // Redirect to Google login page
    window.location.href = "https://accounts.google.com";
  };

  const handleAppleLogin = () => {
    // Redirect to Apple ID login page
    window.location.href = "https://appleid.apple.com";
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="auto" className="d-flex justify-content-center">
          <Card>
            <Card.Body>
              <div className="button-row">
                <Button variant="primary" onClick={handleFacebookLogin}>
                  <FaFacebook />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto" className="d-flex justify-content-center">
          <Card>
            <Card.Body>
              <div className="button-row">
                <Button variant="danger" onClick={handleGoogleLogin}>
                  <FaGoogle />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto" className="d-flex justify-content-center">
          <Card>
            <Card.Body>
              <div className="button-row">
                <Button variant="dark" onClick={handleAppleLogin}>
                  <FaApple />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginWithIds;
