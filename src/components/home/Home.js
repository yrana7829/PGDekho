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
      <Banner />

      <div className='homeSection1'>
        <h2 className='homeSection1Heading'>
          Nearby Your Location{' '}
          <Link to='/all-properties' className='seeAllText'>
            See All
          </Link>
        </h2>
        <PropertyCard />
      </div>

      <div className='homeSection2'>
        <Row className='px-5 ' style={{ marginLeft: '70px' }}>
          <h2 className='homeSectionHeading'>Recommended Properties</h2>
          <RecommendedPropCard />
        </Row>
      </div>

      <div className='homeSection3'>
        <img src={img} alt='API Image' className='homeSection3Image' />
        <div className='homeSection3PriceTag'>
          <span className='homeSection3PriceTagText'>700k per month</span>
        </div>
        <span className='homeSection3Text'>Kos Hibrida 2</span>
        <p className='homeSection3Text2'>
          4.5 <span className='star'>&#9733;</span>
        </p>
      </div>

      <div className='homeSection4'>
        <Row className='px-5 ' style={{ marginLeft: '70px' }}>
          <h2 className='homeSection1Heading'>Properties in Top Localities</h2>
          <TopLocalityCard />
        </Row>
      </div>

      <div className='homeSection5'>
        <h2 className='homeSection1Heading'>
          Popular Properties
          <Link to='/all-properties' className='seeAllText'>
            See All
          </Link>
        </h2>
        <div className='homeSection5Buttons'>
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
