import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { FiMapPin } from "react-icons/fi";
import { BsJustify, BsSearch } from "react-icons/bs";
import { BsFilter, BsFilterSquare } from "react-icons/bs";

const Banner = () => {
  return (
    <Container
      style={
        {
          // border: "1px solid black",
        }
      }
    >
      {/* Banner section */}
      <Row className="banner" style={{ height: "750px", left: "103px" }}>
        {/* Left side of the banner */}
        <Col
          md={6}
          className="grid-item item1"
          style={
            {
              // border: "1px solid black",
            }
          }
        >
          <Col>
            {/* Heading */}
            <div className="banner-heading">
              <span style={{ color: "black" }}>Find Your </span>
              <span style={{ color: "#fa6e42" }}>Perfect</span>
              <Row>Rental Property</Row>
              <Row style={{ color: "#fa6e42" }}>Today</Row>
            </div>

            {/* Quote */}
            <Row className="bannerQutes">
              lorem Lorem ipsum dolor sit amet consectetur. Sed faucibus nisl
              arcu blandit vel condimentum lectus sit.
            </Row>

            {/* Counters */}
            <Row>
              <Col>
                <Row className="count">
                  {/* Renter counter */}
                  <Col md={6} className="renterCount">
                    <div className="renterCountdiv1">
                      <h1 style={{ paddingLeft: "20px" }}>
                        51K<b>+</b>
                      </h1>
                      <h3 style={{ paddingLeft: "20px", color: "black" }}>
                        renters
                      </h3>
                    </div>
                  </Col>

                  {/* Property counter */}
                  <Col md={6} className="proprtyCount">
                    <div className="renterCountdiv1">
                      <h1 style={{ paddingLeft: "20px" }}>30K+</h1>
                      <h3 style={{ paddingLeft: "20px", color: "black" }}>
                        Properties
                      </h3>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Categories */}
            <Row className="categories">
              <Col>ALL</Col>
              <Col>PG</Col>
              <Col>1RK</Col>
              <Col>1BHK</Col>
              <Col>2BHK</Col>
            </Row>
          </Col>

          {/* Requirement Filter */}
          <Row className="requirmentFilter justify-content-center">
            {/* Location filter */}
            <Col className="locationFilter d-flex align-items-center">
              <div className="location">
                <span style={{ color: "#fa6e42" }}>
                  <FiMapPin />
                </span>{" "}
                location
                <div className="add-more">Add more</div>
              </div>
            </Col>

            {/* Budget filter */}
            <Col className="d-flex align-items-center">
              <div className="budget">Budget</div>
            </Col>

            {/* Filter icon */}
            <Col className="d-flex align-items-center">
              <BsFilterSquare />
            </Col>

            {/* Search bar */}
            <Col className="d-flex align-items-center">
              <Form inline className="search-bar">
                <Button
                  variant="primary"
                  className="search-button"
                  style={{ width: "200px", backgroundColor: "#fa6e42" }}
                >
                  <BsSearch className="search-icon" />
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>

        {/* Middle section */}
        <Col
          md={3}
          className="grid-item item2"
          // style={{ border: "1px solid black" }}
        ></Col>

        {/* Right section */}
        <Col
          md={3}
          className="grid-item item3"
          // style={{ border: "1px solid black" }}
        ></Col>
      </Row>
    </Container>
  );
};

export default Banner;
