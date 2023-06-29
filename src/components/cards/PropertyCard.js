import React from 'react';
import { Card, Row, Col, Button, CardImg, Nav } from 'react-bootstrap';
import { AiOutlineCar } from 'react-icons/ai';
import { LuRuler, LuBedDouble, LuBath } from 'react-icons/lu';
import properties from '../../product';
import CircleCallButton from '../btn/CircleCallButton';
import CircleShareButton from '../btn/CircleShareButton';

import WishListbtn from '../btn/WishListbtn';
import { IoCarSportOutline } from 'react-icons/io5';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PropertyCard.css';

const PropertyCard = () => {
  const { useState, useEffect } = React;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth <= 992;
  const isExtraSmallScreen = windowWidth <= 770;
  const isVerySmallScreen = windowWidth <= 500;
  const cardCount = isSmallScreen ? (isExtraSmallScreen ? 1 : 2) : 3;
  const propertiesToDisplay = properties.slice(0, cardCount);
  const mobilepropertiesToDisplay = properties.slice(0, 3);

  return (
    <Row>
      {!isVerySmallScreen &&
        propertiesToDisplay.map((property) => (
          <Col
            key={property.id}
            className='col-xl-4 col-lg-4 col-md-6 col-sm-12'
          >
            <Card className='property-card reduced-width'>
              <Card.Body className='d-flex flex-column justify-content-between card-body'>
                <div className='d-flex'>
                  <div className='wishlist-button-container'>
                    <WishListbtn />
                  </div>

                  <div className='mr-1'>
                    <CardImg
                      src={property.areaImage}
                      variant='top'
                      className='property-image'
                    />
                  </div>

                  <div className='ml-1'>
                    <CardImg
                      src={property.areaImage2}
                      variant='top'
                      className='property-image'
                      style={{ textAlign: 'right' }}
                    />
                  </div>
                </div>

                <div className='title-div'>
                  <div className='title-div-inner'>
                    <Card.Title className='Room-Title'>
                      {property.name}
                    </Card.Title>

                    <div className='Room-location' style={{ color: 'white' }}>
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
                  <Row className='Room-price-div'>
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

                  <Row className='Area-details'>
                    <Col className='col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xsm-12 px-4'>
                      <Row className='justify-content-center align-items-center'>
                        <Col className='text-center '>
                          <LuRuler className='Room-area-icon' />
                          <p className='Room-area-details'>
                            {property.area} sqft
                          </p>
                        </Col>
                        <Col className='text-center '>
                          <LuBedDouble className='Room-area-icon' />
                          <p className='Room-area-details'>
                            {property.totalBeds} Beds
                          </p>
                        </Col>
                        <Col className='text-center '>
                          <LuBath className='Room-area-icon' />
                          <p className='Room-area-details'>
                            {property.bath} Baths
                          </p>
                        </Col>
                        <Col className='text-center '>
                          <IoCarSportOutline
                            className='Room-area-icon light-icon'
                            style={{
                              fontWeight: '50',
                              fontSize: '16px',
                              color: 'gray',
                            }}
                          />
                          <p className='Room-area-details'>
                            {property.garage ? 'Yes' : 'No'}
                          </p>
                        </Col>
                      </Row>
                    </Col>

                    <Col className='d-flex justify-content-end col-3'>
                      <Button
                        variant='success'
                        className='w-70 btn-button'
                        style={{
                          marginTop: '10px',
                          height: '30px',
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

      {/* Carousel on mobile screens */}
      {isVerySmallScreen && (
        <Carousel>
          {mobilepropertiesToDisplay.map((property) => (
            <div key={property.id}>
              <Card className='property-card-mb reduced-width'>
                <Card.Body className='d-flex flex-column justify-content-between card-body'>
                  <div className='d-flex'>
                    <div className='wishlist-button-container'>
                      <WishListbtn />
                    </div>

                    <div>
                      <CardImg
                        src={property.areaImage}
                        variant='top'
                        className='property-image'
                      />
                    </div>
                  </div>

                  <div className='title-div-mb'>
                    <div className='title-div-inner-mb'>
                      <Card.Title className='Room-Title-mb'>
                        {property.name}
                      </Card.Title>

                      <Card.Text className='Room-location-mb'>
                        {property.location}
                      </Card.Text>
                    </div>

                    <div className='title-btn-div-mb'>
                      <CircleShareButton />
                      <CircleCallButton />
                    </div>
                  </div>

                  <Row className='Room-price-div-mb py-0'>
                    <Col className='Room-price-cols-mb'>
                      <div className='Room-occupancy'>
                        <span className='Room-occupancy-title'>Single</span>
                        <span className='Room-occupancy-price'>
                          ${property.roomPrices.singleRoom}
                        </span>
                      </div>
                    </Col>
                    <Col className='Room-price-cols-mb'>
                      <div className='Room-occupancy'>
                        <span className='Room-occupancy-title'>Double</span>
                        <span className='Room-occupancy-price'>
                          ${property.roomPrices.doubleRoom}
                        </span>
                      </div>
                    </Col>
                    <Col className='Room-price-cols-mb'>
                      <div className='Room-occupancy'>
                        <span className='Room-occupancy-title'>Three</span>
                        <span className='Room-occupancy-price'>
                          ${property.roomPrices.threeRoom}
                        </span>
                      </div>
                    </Col>
                  </Row>

                  <Row className='Area-details'>
                    <Col className='col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xsm-12 px-4'>
                      <Row className='justify-content-center align-items-center'>
                        <Col className='text-center '>
                          <LuRuler className='Room-area-icon' />
                          <p className='Room-area-details-mb'>
                            {property.area} sqft
                          </p>
                        </Col>
                        <Col className='text-center '>
                          <LuBedDouble className='Room-area-icon' />
                          <p className='Room-area-details-mb'>
                            {property.totalBeds} Beds
                          </p>
                        </Col>
                        <Col className='text-center '>
                          <LuBath className='Room-area-icon' />
                          <p className='Room-area-details-mb'>
                            {property.bath} Baths
                          </p>
                        </Col>
                        <Col className='text-center '>
                          <IoCarSportOutline
                            className='Room-area-icon light-icon'
                            style={{ fontWeight: '50', fontSize: '16px' }}
                          />
                          <p className='Room-area-details-mb'>
                            {property.garage ? 'Yes' : 'No'}
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='d-flex justify-content-center col-12'>
                      <Button
                        variant='success'
                        className='w-100 btn-button'
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
                </Card.Body>
              </Card>
            </div>
          ))}
        </Carousel>
      )}
    </Row>
  );
};

export default PropertyCard;
