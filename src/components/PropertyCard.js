import React from 'react';
import { Card, Row, Col, Button, CardImg, Nav } from 'react-bootstrap';
import { FaRuler, FaBed, FaBath, FaCar } from 'react-icons/fa';
import properties from '../product';

const PropertyCard = () => {
  return (
    <Row>
      {properties.map((property) => (
        <Col key={property.id} className='mb-4'>
          <Card className='property-card'>
            <CardImg
              src={property.areaImage}
              variant='top'
              className='property-image'
            />
            <Card.Body className='d-flex flex-column justify-content-between'>
              <div>
                <Card.Title className='Room-Title'>{property.name}</Card.Title>
                <Card.Text className='Room-location'>
                  {property.location}
                </Card.Text>
              </div>
              <div>
                <Row className='Room-price-div'>
                  <Col className='Room-price-cols'>
                    <div className='Room-occupancy'>
                      <span>Single</span>
                      <span className='Room-occupancy-price'>
                        ${property.roomPrices.singleRoom}
                      </span>
                    </div>
                  </Col>
                  <Col className='Room-price-cols'>
                    <div className='Room-occupancy'>
                      <span>Double</span>
                      <span className='Room-occupancy-price'>
                        ${property.roomPrices.doubleRoom}
                      </span>
                    </div>
                  </Col>
                  <Col className='Room-price-cols'>
                    <div className='Room-occupancy'>
                      <span>Three</span>
                      <span className='Room-occupancy-price'>
                        ${property.roomPrices.threeRoom}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className='Area-details'>
                  <Col xs={8}>
                    <Row className='justify-content-center align-items-center'>
                      <Col className='text-center mx-2'>
                        <FaRuler className='Room-area-icon' />
                        <p className='Room-area-details'>
                          {property.area} sqft
                        </p>
                      </Col>
                      <Col className='text-center mx-2'>
                        <FaBed className='Room-area-icon' />
                        <p className='Room-area-details'>
                          {property.totalBeds}
                        </p>
                      </Col>
                      <Col className='text-center mx-2'>
                        <FaBath className='Room-area-icon' />
                        <p className='Room-area-details'>{property.bath}</p>
                      </Col>
                      <Col className='text-center mx-2'>
                        <FaCar className='Room-area-icon' />

                        <p className='Room-area-details'>
                          {property.garage ? 'Yes' : 'No'}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={4}>
                    <Button variant='success' className='w-100 Room-card-btn'>
                      Book
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PropertyCard;
