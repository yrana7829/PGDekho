import React from "react";
import { Card, Row, Col, Button, CardImg } from "react-bootstrap";

import { AiOutlineCar } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { LuRuler, LuBedDouble, LuBath } from "react-icons/lu";
import "./BannerCard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import properties from "../../product";
import "./PopularPropCard.css";
import CircleShareButton from "../btn/CircleShareButton";
import CircleCallButton from "../btn/CircleCallButton";
import WishListbtn from "../btn/WishListbtn";
import { useMediaQuery } from "react-responsive";

const BannerCard = () => {
  const firstFourProperties = properties.slice(0, 1);

  return (
    <>
      {firstFourProperties.map((property) => (
        <div key={property.id}>
          <Card className="popular-property-card reduced-width pb-1 banner-card">
            <div className="wishlist-button-container2">
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
                    <Card.Title className="popular-Room-Title">
                      {property.name}
                    </Card.Title>
                  </Col>
                </Row>
                <Row className="popular-Room-info">
                  <Col className="d-flex ">
                    <Card.Text className="popular-Room-location"></Card.Text>
                    <Card.Text className="popular-Room-price1  banner-Room-info">
                      Starting at
                    </Card.Text>
                  </Col>
                </Row>

                <Row className="popular-Room-info banner-Room-info">
                  <Col className="d-flex ">
                    <IoLocation style={{ color: "#fa6e42" }} />
                    <Card.Text className="popular-Room-location banner-location">
                      {property.location}
                    </Card.Text>
                    <Card.Text className="popular-Room-price2 banner-room">
                      20000 / month
                    </Card.Text>
                  </Col>
                </Row>

                <Row className="popular-Area-details px-2 Banner-Area-details">
                  <Col>
                    <Row className="justify-content-center align-items-center">
                      <Col className="text-center ">
                        <LuRuler className="Room-area-icon" />
                        <p className="Room-area-details">
                          {property.area} sqft
                        </p>
                      </Col>
                      <Col className="text-center ">
                        <LuBedDouble className="Room-area-icon" />
                        <p className="Room-area-details">
                          {property.totalBeds} Beds
                        </p>
                      </Col>
                      <Col className="text-center ">
                        <LuBath className="Room-area-icon" />
                        <p className="Room-area-details">
                          {property.bath} Baths
                        </p>
                      </Col>
                      <Col className="text-center ">
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
              <Row className="last-row  px-2 Banner-last-row">
                <Col className="first-col col-3 ">
                  <CircleShareButton style={{ opacity: ".7" }} />
                </Col>
                <Col className="first-col col-3 ">
                  <CircleCallButton />
                </Col>
                <Col className="last-col col-6">
                  <Button
                    variant="success"
                    className="w-100 btn-button"
                    style={{
                      marginTop: "0px",
                      height: "39.67px",
                      padding: "0",
                      border: "0.441199px solid #FA6E42",
                      borderRadius: "15px",
                      color: "#FA6E42",
                      background: "#FFFFFF",
                      width: "139px",
                      fontWeight: "700",
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

export default BannerCard;
