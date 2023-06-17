import React from "react";
import { Card, Row, Col, Button, CardImg, Nav } from "react-bootstrap";
import properties from "../product";

const PropertyCard = () => {
  return (
    <Row>
      {properties.map((property) => (
        <Col key={property.id} className="mb-4">
          <Card
            className="horizontal-card"
            style={{ width: "400px", height: "354px" }}
          >
            <CardImg
              src={property.areaImage}
              variant="top"
              className="property-image"
            />
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title>{property.name}</Card.Title>
                <Card.Text>{property.location}</Card.Text>
              </div>
              <div>
                <Row>
                  <Col>
                    <p>Single Room: ${property.roomPrices.singleRoom}</p>
                  </Col>
                  <Col>
                    <p>Double Room: ${property.roomPrices.doubleRoom}</p>
                  </Col>
                  <Col>
                    <p>Three Room: ${property.roomPrices.threeRoom}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Area: {property.area} sqft</p>
                  </Col>
                  <Col>
                    <p>Total Beds: {property.totalBeds}</p>
                  </Col>
                  <Col>
                    <p>Bathrooms: {property.bath}</p>
                  </Col>
                  <Col>
                    <p>Garage: {property.garage ? "Yes" : "No"}</p>
                  </Col>
                </Row>
              </div>
              <Button variant="success">Book</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PropertyCard;
