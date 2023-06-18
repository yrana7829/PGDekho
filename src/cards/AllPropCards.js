import React from 'react';
import { Col, Card, CardImg, Row, Button } from 'react-bootstrap';
import { FaRuler, FaBed, FaBath, FaCar } from 'react-icons/fa';
import properties from '../product';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductCard = ({ property }) => {
  return (
    <Col key={property.id} className='mb-4'>
      <Card className='property-card'>
        <CardImg
          src={property.areaImage}
          variant='top'
          className='property-image'
        />
        <div className='d-flex flex-column justify-content-between'>
          <div>
            <h5 className='Room-Title'>{property.name}</h5>
            <p className='Room-location'>{property.location}</p>
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
                    <p className='Room-area-details'>{property.area} sqft</p>
                  </Col>
                  <Col className='text-center mx-2'>
                    <FaBed className='Room-area-icon' />
                    <p className='Room-area-details'>{property.totalBeds}</p>
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
        </div>
      </Card>
    </Col>
  );
};

const AllPropCards = () => {
  const groupedProperties = [];
  for (let i = 0; i < properties.length; i += 3) {
    groupedProperties.push(properties.slice(i, i + 3));
  }

  return (
    <div>
      <NavBar />
      <div className='top-div' style={{ height: '100px' }}>
        {/* Add title component or content here */}
        <h1 className='top-div-text'>For Rent</h1>
      </div>
      <div
        className='top-div2'
        style={{ height: '100px', maxWidth: '80%', margin: '0 auto' }}
      >
        {/* Add filtering buttons component or content here */}
        <Button
          className='prop-btn '
          style={{
            width: '10%',
            height: '45px',
            background: '#FA6E42',
            color: 'white',
          }}
        >
          Sort & Filter
        </Button>
        <Button
          className='prop-btn'
          style={{
            width: '10%',
            height: '45px',
            background: ' #FFF0EC',
            color: '#FA6E42',
          }}
        >
          1, 2 BHK
        </Button>
        <Button
          className='prop-btn'
          style={{
            width: '10%',
            height: '45px',
            background: ' #FFF0EC',
            color: '#FA6E42',
          }}
        >
          0-40k
        </Button>
        <Button
          className='prop-btn'
          style={{
            width: '10%',
            height: '45px',
            background: ' #FFF0EC',
            color: '#FA6E42',
          }}
        >
          Male
        </Button>
        <Button
          className='prop-btn'
          style={{
            width: '10%',
            height: '45px',
            background: ' #FFF0EC',
            color: '#FA6E42',
          }}
        >
          Immidiate
        </Button>
      </div>
      <div
        className='top-div3'
        style={{
          height: '100px',
          maxWidth: '80%',
        }}
      >
        Properties Listing
      </div>
      <div
        className='product-list'
        style={{ maxWidth: '80%', margin: '0 auto 0 auto' }}
      >
        {groupedProperties.map((group, index) => (
          <Row key={index} className='mb-4'>
            {group.map((property) => (
              <ProductCard key={property.id} property={property} />
            ))}
          </Row>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllPropCards;
