import React from 'react';
import { Card, Row, Col, Button, CardImg } from 'react-bootstrap';
import {
  FaRuler,
  FaBed,
  FaBath,
  FaCar,
  FaShareAlt,
  FaPhoneAlt,
} from 'react-icons/fa';

import properties from '../product';

const PopularPropCard = () => {
  const firstFourProperties = properties.slice(0, 4);
  return (
    <Row>
      {firstFourProperties.map((property) => (
        <Col key={property.id} className='mb-4'>
          <Card className='property-card'>
            <CardImg
              src={property.areaImage}
              variant='top'
              className='property-image'
            />
            <Card.Body className='d-flex flex-column justify-content-between'>
              <div>
                <Row className='Room-info'>
                  <Col>
                    <Card.Title className='Room-Title'>
                      {property.name}
                    </Card.Title>
                  </Col>
                </Row>
                <Row className='Room-info2'>
                  <Col>
                    <Card.Text className='Room-price'>Starting at</Card.Text>
                  </Col>
                </Row>
                <Row className='Room-info'>
                  <Col>
                    <Card.Text className='Room-location'>
                      {property.location}
                      <span className='Room-price'>20000/month</span>
                    </Card.Text>
                  </Col>
                </Row>

                <Row className='Area-details'>
                  <Col>
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
                </Row>
              </div>
              <Row className='justify-content-end align-items-center'>
                <Col className='text-center mx-2'>
                  <FaShareAlt className='Room-button-icon share-button' />
                </Col>
                <Col className='text-center mx-2'>
                  <FaPhoneAlt className='Room-button-icon call-button' />
                </Col>
                <Col className='text-center mx-2'>
                  <Button variant='success' className='Room-card-btn'>
                    Book
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PopularPropCard;
