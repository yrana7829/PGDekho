import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import img1 from "../assets/image/img1.jpg";

const MyCard = () => {
  return (
    <Card style={{ width: "270px", height: "150px", margin: "8px" }}>
      <Row>
        <Col style={{ padding: "2px", margin: "4px", borderRadius: "2px" }}>
          <Card.Img variant="top" src={img1} />
        </Col>
        <Col style={{ padding: "2px", margin: "4px" }}>
          <Card.Img variant="top" src={img1} />
        </Col>
      </Row>

      <Card.Body>
        <Row>
          <Col>
            <Row> Sky Dandelions Apartment</Row>
            <Row>Sector-23, Gurugram</Row>
          </Col>
          <Col> </Col>
        </Row>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
