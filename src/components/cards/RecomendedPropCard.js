import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import properties from '../../product';
import './RecommendedPropCard.css';

const RecommendedPropCard = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6, // Increase the number of items to show
      slidesToSlide: 1,
      partialVisibilityGutter: 30, // Reduce the space between cards
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4, // Increase the number of items to show
      slidesToSlide: 1,
      partialVisibilityGutter: 20, // Reduce the space between cards
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2, // Increase the number of items to show
      slidesToSlide: 1,
      partialVisibilityGutter: 10, // Reduce the space between cards
    },
    smallMobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 10,
    },
  };

  const renderPropertyCards = () => {
    return properties.map((property) => (
      <div key={property.id} className='px-3 py-2'>
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
