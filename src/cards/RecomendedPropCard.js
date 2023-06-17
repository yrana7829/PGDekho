import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import properties from '../product';

const RecommendedPropCard = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const renderPropertyCards = () => {
    return properties.map((property) => (
      <div key={property.id} className='mb-4'>
        <Card className='property-card-small'>
          <Card.Img
            src={property.areaImage}
            variant='top'
            className='property-image-small'
          />
          <Card.Body>
            <Card.Text className='Room-location-small'>
              {property.location}
              <p className='Romm-location-small-text'>365 rented properties</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    ));
  };

  return (
    <Carousel
      responsive={responsive}
      draggable={true} // Enable sliding
      swipeable={true} // Enable sliding
      ssr={true}
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition='transform 300ms ease-in-out'
      transitionDuration={500}
      containerClass='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      itemClass='carousel-item-padding-40-px'
    >
      {renderPropertyCards()}
    </Carousel>
  );
};

export default RecommendedPropCard;
