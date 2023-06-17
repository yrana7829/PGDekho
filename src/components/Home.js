import React from 'react';
import Banner from './Banner';
import NavBar from './Navbar';
import Footer from './Footer';
import PropertyCard from '../cards/PropertyCard';
import RecommendedPropCard from '../cards/RecomendedPropCard';
import img from '../assets/image/img7.jpg';

const Home = () => {
  return (
    <>
      <NavBar />

      <Banner />
      <div className='homeSection1'>
        <h2 className='homeSectionHeading'>Nearby Your Location</h2>
        <PropertyCard />
      </div>
      <div className='homeSection2'>
        <h2 className='homeSectionHeading'>Recommended Properties</h2>
        <RecommendedPropCard />
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
        <h2 className='homeSectionHeading'>Properties in Top Localities</h2>
        <PropertyCard />
      </div>

      <div className='homeSection5'>
        <h2 className='homeSectionHeading'>Popular Properties</h2>
      </div>
      {/* <Map /> */}
      <Footer />
    </>
  );
};

export default Home;
