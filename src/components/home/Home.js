import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';
import Banner from './components/Banner';
import NavBar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import PropertyCard from '../cards/PropertyCard';
import RecommendedPropCard from '../cards/RecomendedPropCard';
import img from '../../assets/image/img7.jpg';
import PopularPropCard from '../cards/PopularPropCard';
import './home.css';
import TopLocalityCard from '../cards/TopLoalityCard';

const Home = () => {
  return (
    <>
      <NavBar />

      <div className='homeSection1 px-5 py-1'>
        <h2 className='homeSection1Heading px-4'>
          Nearby Your Location{' '}
          <Link to='/all-properties' className='seeAllText'>
            See All
          </Link>
        </h2>
        <PropertyCard />
      </div>

      <div className='homeSection2 px-5 py-4'>
        <Row className='px-4'>
          <h2 className='homeSection2Heading '>Recommended Properties</h2>
          <RecommendedPropCard />
        </Row>
      </div>

      <div className='homeSection3 px-5'>
        <div className='homeSection3ImageContainer'>
          <img src={img} alt='API_Image' className='homeSection3Image' />
        </div>
        <div className='homeSection3PriceTag'>
          <span className='homeSection3PriceTagText'>700k per month</span>
        </div>
        <span className='homeSection3Text'>Kos Hibrida 2</span>
        <p className='homeSection3Text2'>
          4.5 <span className='star'>&#9733;</span>
        </p>
      </div>

      <div
        className='homeSection1 px-5 py-5'
        style={{ background: 'rgba(248, 248, 254, 1)' }}
      >
        <h2 className='homeSection1Heading px-4' style={{ marginTop: '-2%' }}>
          Properties In Top Localities{' '}
        </h2>
        <PropertyCard />
      </div>

      <div className='homeSection5 px-5'>
        <h2 className='homeSection1Heading px-4' style={{ marginTop: '-2%' }}>
          Popular Properties
          <Link to='/all-properties' className='seeAllText'>
            See All
          </Link>
        </h2>
        <div className='homeSection5Buttons px-4'>
          <Button
            className='prop-btn'
            style={{
              width: '8%',
              height: '44px',
              marginTop: '10px',
              marginLeft: '0',
            }}
          >
            ALL
          </Button>
          <Button
            className='prop-btn'
            style={{ width: '8%', height: '44px', marginTop: '10px' }}
          >
            PG
          </Button>
          <Button
            className='prop-btn'
            style={{ width: '8%', height: '44px', marginTop: '10px' }}
          >
            RK
          </Button>
          <Button
            className='prop-btn'
            style={{ width: '8%', height: '44px', marginTop: '10px' }}
          >
            1BHK
          </Button>
          <Button
            className='prop-btn'
            style={{ width: '8%', height: '44px', marginTop: '10px' }}
          >
            2BHK
          </Button>
        </div>
        <PopularPropCard />
      </div>

      {/* <Map /> */}
      <Footer />
    </>
  );
};

export default Home;
