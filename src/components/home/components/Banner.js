import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { IoLocation } from 'react-icons/io5';
import { BsSearch } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import ScrollerModal from '../../modal/ScrollerModal';
import './Banner.css';
import bannerMap from '../../../assets/image/bannerMap.png';

import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import Locations from './LocationsAutoComplete';

const Banner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrollerModalOpen, setScrollerModalOpen] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [showPriceRange, setShowPriceRange] = useState(false);

  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  const handleScroller = () => {
    setScrollerModalOpen(true);
  };

  const closeScrollerModal = () => {
    setScrollerModalOpen(false);
  };

  const handlePriceRangeSelect = (range) => {
    setSelectedPriceRange(range);
    console.log('Selected Price Range:', range);
    setShowPriceRange(true);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    // Navigate to the all properties route with the selected filters
    navigate(
      `/all-properties?location=${encodeURIComponent(
        location
      )}&price=${encodeURIComponent(selectedPriceRange)}`
    );
  };

  const handleShowPriceRange = () => {
    setSelectedPriceRange(false);
    setShowPriceRange(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Banner section */}
      <Row className='banner'>
        {/* Left side of the banner */}
        {!isSmallScreen && (
          <Col className='col-12 banner-cols'>
            <Col className='col-6 banner-col-1 px-5 py-5'>
              <span className='banner-headings'>Find Your </span>
              <span style={{ color: '#fa6e42' }} className='banner-headings'>
                Perfect
              </span>
              <p style={{ color: '#fa6e42' }} className='banner-headings'>
                Rental Property
              </p>
              <p style={{ color: 'black' }} className='banner-headings'>
                Today
              </p>

              <p className='banner-text'>
                lorem Lorem ipsum dolor sit amet consectetur. Sed faucibus nisl
                arcu blandit vel condimentum lectus sit.
              </p>

              <div className='count-div'>
                {/* Renter counter */}
                <Col className=' col-4 renterCount'>
                  <div className='renterCountdiv1'>
                    <h1 id='count-headings'>
                      50K<b>+</b>
                    </h1>
                    <h1 id='count-texts'>Renters</h1>
                  </div>
                </Col>

                {/* Property counter */}
                <Col className='col-4 renterCount'>
                  <div className='renterCountdiv1'>
                    <h1 id='count-headings'>30K+</h1>
                    <h1 id='count-texts'>Properties</h1>
                  </div>
                </Col>
                <Col className='col-4 renterCount'></Col>
              </div>

              {/* Categories */}
              <div className='categories'>
                <span className='cat-content'>ALL</span>
                <span className='cat-content'>PG</span>
                <span className='cat-content'>1RK</span>
                <span className='cat-content'>1BHK</span>
                <span className='cat-content'>2BHK</span>
              </div>

              {/* Search and filter Bar */}
              <Row className='requirmentFilter'>
                <Col className='vertical-part1 col-4'>
                  <Col className='text1'>
                    <IoLocation
                      style={{
                        color: '#fa6e42',
                        margin: '1px',
                        scale: '1.15',
                      }}
                    />
                    <span className='text1'>Location</span>

                    <Locations />
                  </Col>
                </Col>

                <Col className=' vertical-part2 col-4'>
                  <Col className='budgets'>
                    <div className='text1' onClick={handleScroller}>
                      Budgets
                      <IoIosArrowDown style={{ color: '#fa6e42' }} />
                    </div>

                    {scrollerModalOpen && (
                      <ScrollerModal
                        isOpen={scrollerModalOpen}
                        onClose={closeScrollerModal}
                        onPriceRangeSelect={handlePriceRangeSelect}
                      />
                    )}
                  </Col>

                  <Col className='budgets2'>
                    {/* add more space */}
                    {showPriceRange ? (
                      <>
                        {selectedPriceRange !== null ? (
                          <div className='col-6 text2_budget'>
                            <span>{selectedPriceRange}</span>
                            <span>
                              <CloseIcon
                                style={{
                                  fontSize: '15px',
                                  border: '1px solid black',
                                  borderRadius: '10px',
                                  opacity: '0.5',
                                  cursor: 'pointer',
                                }}
                                onClick={handleShowPriceRange}
                              />
                            </span>
                          </div>
                        ) : (
                          <div className='col-6 text2'></div>
                        )}
                      </>
                    ) : (
                      <div className='col-6'></div>
                    )}

                    <div className='col-3' style={{ textAlign: 'end' }}></div>

                    {/* filter text space */}
                    <div className='col-3 text2' style={{ textAlign: 'end' }}>
                      Add More
                    </div>
                  </Col>
                </Col>
                <Col className='vertical-part3 col-4'>
                  <Button
                    className='btn-button banner-btn'
                    style={{
                      height: '55px',
                      width: '80%',
                      background: '#FA6E42',
                      fontfamily: 'Plus Jakarta Sans',
                      fontstyle: 'normal',
                      fontweight: '600',
                      fontsize: '16px',
                      lineheight: '20px',
                      letterspacing: '0.01em',
                      color: '#F2F2F2',
                    }}
                    onClick={handleSearch}
                  >
                    <span style={{ color: ' #FFFFFF' }}>
                      <BsSearch />
                    </span>
                    <span style={{ color: '#FA6E42' }}>br</span>
                    <span className='search-text'>Search</span>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col
              className='col-6 banner-col-1'
              style={{
                height: 'auto',
                overflow: 'hidden',
                backgroundImage: `url(${bannerMap})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></Col>
          </Col>
        )}

        {/* Mobile Screen */}
        {isSmallScreen && (
          <Col className='col-12 banner-cols'>
            <Col className='col-12 px-5 py-5'>
              <span className='banner-headings'>Find Your </span>
              <span style={{ color: '#fa6e42' }} className='banner-headings'>
                Perfect
              </span>
              <p style={{ color: '#fa6e42' }} className='banner-headings'>
                Rental Property
              </p>
              <p style={{ color: 'black' }} className='banner-headings'>
                Today
              </p>

              <p className='banner-text'>
                lorem Lorem ipsum dolor sit amet consectetur. Sed faucibus nisl
                arcu blandit vel condimentum lectus sit.
              </p>

              <div className='count-div'>
                {/* Renter counter */}
                <Col className=' col-4 renterCount'>
                  <div className='renterCountdiv1'>
                    <h1 id='count-headings'>
                      50K<b>+</b>
                    </h1>
                    <h1 id='count-texts'>Renters</h1>
                  </div>
                </Col>

                {/* Property counter */}
                <Col className='col-4 renterCount'>
                  <div className='renterCountdiv1'>
                    <h1 id='count-headings'>30K+</h1>
                    <h1 id='count-texts'>Properties</h1>
                  </div>
                </Col>
                <Col className='col-4 renterCount'></Col>
              </div>

              {/* Selected Price Range */}
              <div className='col-6 text2'>{selectedPriceRange}</div>
            </Col>
          </Col>
        )}
      </Row>
    </>
  );
};

export default Banner;
