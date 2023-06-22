import React from 'react';
import { Card, Row, Col, Button, CardImg, Nav } from 'react-bootstrap';
import { FaRuler, FaBed, FaBath, FaCar } from 'react-icons/fa';
import properties from '../../product';
import CircleCallButton from '../btn/CircleCallButton';
import CircleShareButton from '../btn/CircleShareButton';
import './PropertyCard.css';

const PropertyCard = () => {
  const firstThreeProperties = properties.slice(0, 3);
  return (
    <Row>
      {firstThreeProperties.map((property) => (
        <Col key={property.id} className='mb-4'>
          <Card className='property-card'>
            <Card.Body className='d-flex flex-column justify-content-between'>
              <div className='d-flex'>
                <div className='mr-1'>
                  <CardImg
                    src={property.areaImage}
                    variant='top'
                    className='property-image1'
                  />
                </div>
                <div className='ml-1'>
                  <CardImg
                    src={property.areaImage2}
                    variant='top'
                    className='property-image2'
                    style={{ textAlign: 'right' }}
                  />
                </div>
              </div>

              <div className='title-div'>
                <div className='title-div-inner'>
                  <Card.Title className='Room-Title'>
                    {property.name}
                  </Card.Title>
                  <Card.Text className='Room-location'>
                    {property.location}
                  </Card.Text>
                </div>

                <div className='title-btn-div'>
                  <CircleShareButton />
                  <CircleCallButton />
                </div>
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
                    <Button
                      variant='success'
                      className='w-100 btn-button'
                      style={{
                        marginTop: '10px',
                        width: '85.55px',
                        height: '32.9px',
                        padding: '0',
                        border: '0.441199px solid #FA6E42',
                        borderRadius: '7.73967px',
                        color: '#FA6E42',
                        background: '#FFFFFF',
                      }}
                    >
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
