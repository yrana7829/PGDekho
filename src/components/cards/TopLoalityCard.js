import React from 'react';
import { Card, Row, Col, Button, CardImg, Nav } from 'react-bootstrap';
import { AiOutlineCar } from 'react-icons/ai';
import { LuRuler, LuBedDouble, LuBath } from 'react-icons/lu';

import properties from '../../product';
import CircleCallButton from '../btn/CircleCallButton';
import CircleShareButton from '../btn/CircleShareButton';
import './TopLocalityCard.css';

const TopLocalityCard = () => {
  const firstThreeProperties = properties.slice(0, 3);
  return (
    <Row>
      {firstThreeProperties.map((property) => (
        <Col key={property.id}>
          <Card className='loc-property-card loc-reduced-width'>
            <Card.Body className='d-flex flex-column justify-content-between card-body'>
              <div className='d-flex'>
                <div className='mr-1'>
                  <CardImg
                    src={property.areaImage}
                    variant='top'
                    className='loc-property-image'
                  />
                </div>
                <div className='ml-1'>
                  <CardImg
                    src={property.areaImage2}
                    variant='top'
                    className='loc-property-image'
                    style={{ textAlign: 'right' }}
                  />
                </div>
              </div>

              <div className='loc-title-div'>
                <div className='title-div-inner'>
                  <Card.Title className='Room-Title'>
                    {property.name}
                  </Card.Title>
                  <div className='Room-location' style={{ color: 'white' }}>
                    {' '}
                    dummy div to create space
                  </div>
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
                <Row className='loc-Room-price-div'>
                  <Col className='Room-price-cols'>
                    <div className='Room-occupancy'>
                      <span className='Room-occupancy-title'>Single</span>
                      <span className='Room-occupancy-price'>
                        ${property.roomPrices.singleRoom}
                      </span>
                    </div>
                  </Col>
                  <Col className='Room-price-cols'>
                    <div className='Room-occupancy'>
                      <span className='Room-occupancy-title'>Double</span>
                      <span className='Room-occupancy-price'>
                        ${property.roomPrices.doubleRoom}
                      </span>
                    </div>
                  </Col>
                  <Col className='Room-price-cols'>
                    <div className='Room-occupancy'>
                      <span className='Room-occupancy-title'>Three</span>
                      <span className='Room-occupancy-price'>
                        ${property.roomPrices.threeRoom}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className='loc-Area-details'>
                  <Col xs={8}>
                    <Row className='justify-content-center align-items-center'>
                      <Col className='text-center mx-2'>
                        <LuRuler className='Room-area-icon' />
                        <p className='Room-area-details'>
                          {property.area} sqft
                        </p>
                      </Col>
                      <Col className='text-center mx-2'>
                        <LuBedDouble className='Room-area-icon' />
                        <p className='Room-area-details'>
                          {property.totalBeds} Beds
                        </p>
                      </Col>
                      <Col className='text-center mx-2'>
                        <LuBath className='Room-area-icon' />
                        <p className='Room-area-details'>
                          {property.bath} Baths
                        </p>
                      </Col>
                      <Col className='text-center mx-2'>
                        <AiOutlineCar
                          className='Room-area-icon light-icon'
                          style={{ strokeWidth: '0.1' }}
                        />

                        <p className='Room-area-details'>
                          {property.garage ? 'Yes' : 'No'}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={4} className='d-flex justify-content-end'>
                    <Button
                      variant='success'
                      className='w-70 btn-button'
                      style={{
                        marginTop: '10px',
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

export default TopLocalityCard;
