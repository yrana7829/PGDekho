import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { IoLocation } from 'react-icons/io5';
import { BsFilterSquare, BsSearch } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import './Banner.css';
import bannerMap from '../../../assets/image/bannerMap.png';
import { Map } from '@mui/icons-material';
import MapComponent from '../../Map';
import PopularPropCard from '../../cards/PopularPropCard';
import BannerCard from '../../cards/BannerCard';

const Banner = () => {
  const [selectedBudget, setSelectedBudget] = useState('');

  return (
    <>
      {/* Banner section */}
      <Row className='banner' style={{}}>
        {/* Left side of the banner */}
        <Col
          md={6}
          className='grid-item item1'
          style={{ boxShadow: '8px gray' }}
        >
          <Col>
            {/* Heading */}
            <div
              className='banner-heading'
              style={{
                position: 'absolute',
                width: '553px',
                height: '210px',
                left: '131px',
                top: '175px',
                fontFamily: 'Plus Jakarta Sans',
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: '50px',
                lineHeight: '70px',
                letterSpacing: '0.01em',
                color: '#222222',
              }}
            >
              <span>Find Your </span>
              <span style={{ color: '#fa6e42' }}>Perfect</span>
              <p style={{ color: '#fa6e42', marginBottom: 0 }}>
                Rental Property
              </p>
              <p style={{ color: 'black', marginBottom: 0 }}>Today</p>
            </div>

            {/* Quote */}
            <Row className='bannerQuotes'>
              lorem Lorem ipsum dolor sit amet consectetur. Sed faucibus nisl
              arcu blandit vel condimentum lectus sit.
            </Row>

            {/* Counters */}
            <Row>
              <Col>
                <Row className='count'>
                  {/* Renter counter */}
                  <Col md={6} className='renterCount'>
                    <div className='renterCountdiv1'>
                      <h1 id='count-headings'>
                        50K<b>+</b>
                      </h1>
                      <h3 id='count-texts'>Renters</h3>
                    </div>
                  </Col>

                  {/* Property counter */}
                  <Col md={6} className='proprtyCount'>
                    <div className='renterCountdiv1'>
                      <h1 id='count-headings'>30K+</h1>
                      <h3 id='count-texts'>Properties</h3>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Categories */}
            <Row className='categories'>
              <span className='cat-content'>ALL</span>
              <span className='cat-content'>PG</span>
              <span className='cat-content'>1RK</span>
              <span className='cat-content'>1BHK</span>
              <span className='cat-content'>2BHK</span>
            </Row>
          </Col>

          {/* Requirement Filter */}
          <div className='requirmentFilter'>
            <div className='vertical-part1'>
              <div className='horizontal-part1 '>
                <span className='location-icon'>
                  <IoLocation />
                </span>
                <span className='location-text'>Location</span>
              </div>
              <div className='horizontal-part2'>Add More</div>
            </div>
            <div class='vertical-line' style={{ marginRight: '-1%' }}></div>
            <div className='vertical-part2'>
              <div className='horizontal-part1'>
                <span> Budgets </span>

                <span className='right-content1' style={{ color: '#fa6e42' }}>
                  {/* <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
            >
              <option value=''></option>
              <option value='0-2k'>0-2k</option>
              <option value='2k-5k'>2k-5k</option>
              <option value='5k-10k'>5k-10k</option>
            </select> */}
                  <IoIosArrowDown />
                </span>
                <span className='right-content2'>
                  <BsFilterSquare />
                </span>
              </div>
              <div className='horizontal-part3'>
                <span>Add More</span>
                <span className='filter'>Filter</span>
              </div>
            </div>
            <div class='vertical-line'></div>
            <div className='horizontal-part4'>
              <Button
                className='btn-button'
                style={{
                  height: '57px',
                  width: '209px',
                  marginTop: '-2%',
                  background: '#FA6E42',
                  fontfamily: 'Plus Jakarta Sans',
                  fontstyle: 'normal',
                  fontweight: '600',
                  fontsize: '16px',
                  lineheight: '20px',
                  letterspacing: '0.01em',
                  color: '#F2F2F2',
                }}
              >
                <span style={{ marginRight: '20px', color: ' #FFFFFF' }}>
                  <BsSearch />
                </span>
                <span className='search'>Search</span>
              </Button>
            </div>
          </div>
        </Col>

        {/* Banner map and cards */}

        <Col
          md={6}
          style={{
            backgroundImage: `url(${bannerMap})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={bannerMap}
            alt='BannerImage'
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: '750px',
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Banner;
