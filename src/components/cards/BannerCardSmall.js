import React from "react";
import { Card, Row, Col, Button, CardImg } from "react-bootstrap";

import { AiOutlineCar } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { LuRuler, LuBedDouble, LuBath } from "react-icons/lu";
import "./BannerCardSmall.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import properties from "../../product";
import "./PopularPropCard.css";
import CircleShareButton from "../btn/CircleShareButton";
import CircleCallButton from "../btn/CircleCallButton";
import WishListbtn from "../btn/WishListbtn";
import { useMediaQuery } from "react-responsive";

const BannerCardSmall = () => {
  const firstProperties = properties.slice(0, 1);

  return (
    <>
      {firstProperties.map((property) => (
        <div key={property.id}>
          <Card className="popular-property-card reduced-width pb-1 banner-card-sm">
            <div
              className="wishlist-button-container2 "
              style={{ scale: ".4" }}
            >
              <WishListbtn />
            </div>
            <CardImg
              src={property.areaImage}
              variant="top"
              className="popular-property-image"
            />

            <Card.Body className="d-flex flex-column justify-content-between  card-body">
              <div>
                <Row className="popular-Room-info">
                  <Col>
                    <Card.Title className="popular-Room-Title banner-sm-location">
                      {property.name}
                    </Card.Title>
                  </Col>
                </Row>
                <Row className="popular-Room-info">
                  <Col className="d-flex ">
                    <Card.Text className="popular-Room-location"></Card.Text>
                    <Card.Text className="popular-Room-price1  banner-sm-info">
                      Starting at
                    </Card.Text>
                  </Col>
                </Row>

                <Row className="popular-Room-info  ">
                  <Col className="d-flex p-0 m-0">
                    <IoLocation
                      style={{
                        color: "#fa6e42",
                        marginTop: "-16px",
                        marginLeft: "8px",
                      }}
                    />
                    <Card.Text className="popular-Room-location banner-sm-info">
                      {property.location}
                    </Card.Text>
                    <Card.Text
                      className="popular-Room-price2 banner-sm-info"
                      style={{ marginLeft: "-20px" }}
                    >
                      20000 / month
                    </Card.Text>
                  </Col>
                </Row>

                <Row className="popular-Area-details Banner-sm-details  ">
                  <Col>
                    <Row className="justify-content-center align-items-center ">
                      <Col
                        className="text-center icon-col"
                        style={{ scale: ".7" }}
                      >
                        <LuRuler className="Room-area-icon" />
                        <p className="Room-area-details">
                          {property.area} sqft
                        </p>
                      </Col>
                      <Col
                        className="text-center icon-col"
                        style={{ scale: ".7" }}
                      >
                        <LuBedDouble className="Room-area-icon" />
                        <p className="Room-area-details">
                          {property.totalBeds} Beds
                        </p>
                      </Col>
                      <Col
                        className="text-center icon-col"
                        style={{ scale: ".7" }}
                      >
                        <LuBath className="Room-area-icon" />
                        <p className="Room-area-details">
                          {property.bath} Baths
                        </p>
                      </Col>
                      <Col
                        className="text-center icon-col"
                        style={{ scale: ".7" }}
                      >
                        <AiOutlineCar
                          className="Room-area-icon popular-light-icon"
                          style={{ strokeWidth: "0.1" }}
                        />

                        <p className="Room-area-details">
                          {property.garage ? "Yes" : "No"}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Row className="last-row   Banner-last-row sm-last-row">
                <Col
                  className="first-col col-3 sm-last  "
                  style={{ scale: ".7" }}
                >
                  <CircleShareButton />
                </Col>
                <Col
                  className="first-col col-3 sm-last"
                  style={{ scale: ".7" }}
                >
                  <CircleCallButton />
                </Col>
                <Col className="last-col col-6 sm-last" style={{ scale: ".7" }}>
                  <Button
                    variant="success"
                    className="w-100 btn-button"
                    style={{
                      height: "39.67px",
                      padding: "0",
                      border: "0.441199px solid #FA6E42",
                      borderRadius: "15px",
                      color: "#FA6E42",
                      background: "#FFFFFF",
                      width: "139px",
                      fontWeight: "700",
                      marginLeft: "-5px",
                    }}
                  >
                    Book
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default BannerCardSmall;
