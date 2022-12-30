import React from "react";
import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import Banner2 from "../../assets/images/banner_mob_1.jpg";
import Banner3 from "../../assets/images/banner_mob_2.jpg";
import Banner4 from "../../assets/images/banner_mob_4.jpg";

import Kesariya_Logo from "../../assets/images/Kesariya_Logo.png";
import Banner1 from "../../assets/images/banner_mob_3.jpg";
import Banner5 from "../../assets/images/banner_mob_5.jpg";


export default function Banner() {
  return (
    <>
    <div className="banner">
      <Carousel>
         <Carousel.Item>
          <img className="d-block w-100 mobile-visible" src={Banner1} alt="First slide" />
          <div className="position-relative banner-bg banner1 mobile-hide">
 
            <div className=" banner-main-container w-100 position-relative  d-flex align-items-center">
              <div className="container banner-sub-container">
                <Row>
                  <Col md={6}>
                    <h1 className="mt-0 mb-4">
                      Natural & Purest Sourced Honey from India's Best Bee
                      Farms.
                    </h1>
                    <p className="mb-4">
                      भारत के सर्वश्रेष्ठ मधुमक्खी फार्मों से प्राकृतिक और
                      शुद्धतम शहद।
                    </p>
                    <hr className="w-50 mb-4"></hr>
                    <span className="d-block mb-5">250 g | 500 g | 1Kg</span>
                    <Link className="d-inline-block" to="/">
                      Buy Now
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Carousel.Item> 

        {/* <img
            className="d-block w-100 position-relative"
            src={Banner1}
            alt="First slide"
          /> */}
        {/* <div className="position-absolute banner-main-container w-100">
            <div className="container banner-sub-container">
              <Row>
                <Col md={6}>
                  <h1 className="mt-5 mb-4">
                    Natural & Purest Sourced Honey from India's Best Bee Farms.
                  </h1>
                  <p className="mb-4">
                    भारत के सर्वश्रेष्ठ मधुमक्खी फार्मों से प्राकृतिक और शुद्धतम
                    शहद।
                  </p>
                  <hr className="w-50 mb-4"></hr>
                  <span className="d-block mb-5">250 g | 500 g | 1Kg</span>
                  <Link className="d-inline-block" to="/">
                    Buy Now
                  </Link>
                </Col>
              </Row>
            </div>
        </div>*/}

         <Carousel.Item>
         <img className="d-block w-100 mobile-visible" src={Banner2} alt="First slide" />


<div className="position-relative banner-bg banner2 d-flex align-items-center mobile-hide">

            <div className=" banner-main-container w-100 position-relative  ">
              <div className="container banner-sub-container">
              <Row className="w-100">
                <Col md={6}>
                  <h1 className="mt-0 mb-4">
                      <span className="bg-white d-inline-block mb-2">Your Daily Gut Detox </span>
                      <span className="bg-white d-inline-block">and Immunity Companions</span>
                  </h1>
                  <Link className="d-inline-block" to="/">
                    Buy Now
                  </Link>
                </Col>
              </Row>
              </div>
            </div>
          </div>
         
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 mobile-visible" src={Banner3} alt="Third slide" />
          <div className="position-relative banner-bg banner3 mobile-hide">
 
            <div className=" banner-main-container w-100 position-relative  d-flex align-items-center">
              <div className="container banner-sub-container">
                <Row className="w-100">
                  <Col md={6}>
                    <span className="">The 'Kesariya' Kesar</span>
                    <h1 className="mb-4">
                    Finest & Purest Kesar Sourced from Kashmir.
                    </h1>
                    <p className="mb-4">
                      <img  src={Kesariya_Logo} className="me-2 d-inline-flex
                      align-items-center"/>
                    केसरी बेहतरीन और शुद्ध केसर कश्मीर से प्राप्त।
                    </p>
                    <Link className="d-inline-block" to="/">
                      Buy Now
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Carousel.Item> 

        <Carousel.Item>
          <img className="d-block w-100 mobile-visible" src={Banner4} alt="Fourth slide" />
          <div className="position-relative banner-bg banner4 mobile-hide">
 
            <div className=" banner-main-container w-100 position-relative  d-flex align-items-center">
              <div className="container banner-sub-container">
                <Row>
                  <Col md={6}>
                    <h1 className="mt-0 mb-4">
                    Shilajit Power Nector Strong Like a Rock & Works Like a Horse.
                    </h1>
                    <p className="mb-4">
                    शिलाजीत पावर नेक्टर चट्टान की तरह मजबूत और घोड़े की तरह काम करता है।
                    </p>
                   
                    <Link className="d-inline-block" to="/">
                      Buy Now
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Carousel.Item>



        <Carousel.Item>
          <img className="d-block w-100 mobile-visible" src={Banner5} alt="Fifth slide" />
          <div className="position-relative banner-bg banner5 mobile-hide">
 
            
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
}
