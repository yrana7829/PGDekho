import React from 'react';
import { Card, Row, Col, Button, CardImg } from 'react-bootstrap';
import { AiOutlineCar } from 'react-icons/ai';
import { IoLocation } from 'react-icons/io5';
import { LuRuler, LuBedDouble, LuBath } from 'react-icons/lu';
import properties from '../../product';
import './PopularPropCard.css';
import CircleShareButton from '../btn/CircleShareButton';
import CircleCallButton from '../btn/CircleCallButton';
import WishListbtn from '../btn/WishListbtn';

const PopularPropCard = () => {
  const firstFourProperties = properties.slice(0, 4);
  return (
    <Row>
      {firstFourProperties.map((property) => (
        <Col key={property.id}>
          <Card className='popular-property-card reduced-width'>
            <div className='wishlist-button-container2'>
              <WishListbtn />
            </div>
            <CardImg
              src={property.areaImage}
              variant='top'
              className='popular-property-image'
            />

            <Card.Body className='d-flex flex-column justify-content-between card-body'>
              <div>
                <Row className='popular-Room-info'>
                  <Col>
                    <Card.Title className='popular-Room-Title'>
                      {property.name}
                    </Card.Title>
                  </Col>
                </Row>
                <Row className='popular-Room-info2 justify-content-end'>
                  <Col>
                    <Card.Text
                      className='popular-Room-price1'
                      style={{ marginTop: '-10px' }}
                    >
                      Starting at
                    </Card.Text>
                  </Col>
                </Row>

                <Row className='popular-Room-info'>
                  <Col className='d-flex justify-content-between'>
                    <IoLocation style={{ color: '#fa6e42' }} />
                    <Card.Text className='popular-Room-location'>
                      {property.location}
                    </Card.Text>
                    <Card.Text className='popular-Room-price2'>
                      20000 / month
                    </Card.Text>
                  </Col>
                </Row>

                <Row className='popular-Area-details py-3'>
                  <Col>
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
                          className='Room-area-icon popular-light-icon'
                          style={{ strokeWidth: '0.1' }}
                        />

                        <p className='Room-area-details'>
                          {property.garage ? 'Yes' : 'No'}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Row className='last-row py-5 px-4'>
                <Col className='first-col col-3 '>
                  <CircleShareButton />
                </Col>
                <Col className='first-col col-3 '>
                  <CircleCallButton />
                </Col>
                <Col className='last-col col-6'>
                  <Button
                    variant='success'
                    className='w-100 btn-button'
                    style={{
                      marginTop: '0px',
                      height: ' 39.67px',
                      padding: '0',
                      border: '0.441199px solid #FA6E42',
                      borderRadius: '15px',
                      color: '#FA6E42',
                      background: '#FFFFFF',
                      width: '139px',
                      fontWeight: '700',
                    }}
                  >
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
