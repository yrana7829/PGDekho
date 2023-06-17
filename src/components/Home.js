import React from "react";
import Banner from "./Banner";
import NavBar from "./Navbar";
import Properties from "./Properties";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Carasole from "./Carasole";
import MyCard from "./Carasole";
import PropertyCard from "./PropertyCard";
import Map from "./Map";

const Home = () => {
  return (
    <>
      <NavBar />

      <Banner />
      <div className="homeSection1">
        <h2>Nearby Your Location</h2>
        <PropertyCard />
      </div>
      <div className="homeSection2">
        <h2>Recommended Properties</h2>
      </div>
      <div className="homeSection3">
        <h2>Properties in Top Localities</h2>
      </div>
      {/* <Map /> */}
      <Footer />
    </>
  );
};

export default Home;
