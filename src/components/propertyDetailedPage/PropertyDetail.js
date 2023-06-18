import React from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import properties from '../../product';
import { Col, Row, Button } from 'react-bootstrap';
import { FaBluetooth, FaPhoneAlt } from 'react-icons/fa';

const PropertyDetail = () => {
  const firstProperty = properties[0];

  return (
    <>
      <NavBar />
      <div className=''>
        <div
          className='prop-img-1'
          style={{ backgroundImage: `url(${firstProperty.areaImage})` }}
        ></div>

        {properties.slice(1).map((property, index) => (
          <div
            key={index}
            className={`prop-img-${index + 2}`}
            style={{ backgroundImage: `url(${property.areaImage})` }}
          ></div>
        ))}
      </div>
      <Row className='property-row'>
        <Col sm='4'>
          <div className='book-site'>
            <div className='book-site-1'>
              Entire Bromo mountain view cabin in Surabaya
            </div>
          </div>
        </Col>
        <Col sm='4'>
          <div
            className='btn-bottom text-center justify-content-center d-flex'
            style={{ marginTop: '700px', marginLeft: '60%' }}
          >
            Book Site Visit
          </div>
        </Col>
        <Col sm='2'>
          <div
            className=''
            style={{ marginTop: '690px', marginLeft: '60%', fontSize: '30px' }}
          >
            <FaBluetooth />
          </div>
        </Col>
        <Col sm='2'>
          <div
            className=''
            style={{ marginTop: '690px', marginLeft: '30%', fontSize: '30px' }}
          >
            <FaPhoneAlt />
          </div>
        </Col>
      </Row>
      {properties.map((property) => (
        <Row className='Room-price-div' key={property.id}>
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
      ))}
    </>
  );
};

export default PropertyDetail;
