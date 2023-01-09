import React, { useState } from "react";
import "./Home.css";
import Banner from "../../components/banner/Banner";
import CollectionCards from "../../components/collectionCards/CollectionCards";
import Title from "../../components/titles/Title";

import Benefits from "../../assets/images/Benefits.jpg";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ReviewContainer from "../../components/reviewcontainer/ReviewContainer";
import FourStar from "../../components/reviewStar/FourStar";
import user1 from "../../assets/images/user_01.png";
import user2 from "../../assets/images/user_02.png";
import user3 from "../../assets/images/user_03.png";
import FiveStar from "../../components/reviewStar/FiveStar";
import Products from "../../components/products/Products";
import { AllProductsData } from "../../components/AllProductsData";
import CollectionContainer from "../../components/collectionContainer/CollectionContainer";
export default function Home() {
  const reviewData = [
    {
      image: user1,
      review:
        "I am using Livasa Shilajit from last 6 Months. I can see the Imapct of it on My Daily Routine and Sexual Power Both.",
      description: "Naresh Khanna - Age 44 - West Mumbai",
      ratings: "★★★★★",
    },
    {
      image: user2,
      review:
        "Me and my Husband are using the Livasa Kesar for last 3 months with Milk Every night for the better Health Being and Lifestyle.",
      description: "Narmata - Age - 32 - Delhi",
      ratings: "★★★★★",
    },
    {
      image: user3,
      review:
        "Livasa Jamun Honey and Neem Honey are the Best Switch over alternates for the Stage 1 and Stage 2 Diabetic Patient",
      description: "Amrit - Age 41 - Chandigarh",
      ratings: "★★★★☆",
    },
  ];

  const [review, setReview] = useState(reviewData);

  return (
    <div>
      <Banner />
      <div className="section-container">
        <Title class="text-center mb-4 mb-lg-5" heading="Collections" />
        <div className="container">
          <CollectionContainer />
        </div>
      </div>

      <div className="section-container">
        <Title
          class="text-center mb-lg-5 mb-3"
          heading="Best Seller Honey 🔥"
        />

        <div className="container ">
          <iframe
            className="video-container"
            title="vimeo-player"
            src="https://player.vimeo.com/video/722834425?h=f3a1212ad5"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="section-container">
        <div className="container">
          <div className="section-sub-container text-center">
            <Title class="text-center mb-4" heading="Livasa Natural Products" />
            <p className="mb-5">
              Livasa products are processed for a rich taste and quality.
            </p>
          </div>
          <Row>
            {AllProductsData.map((e) => {
              return (
                <Col md={12} lg={6} sm={12} xs={12}>
                  <Products
                    src={e.image}
                    src1={e.url}
                    produtName={e.title}
                    productPrice={e.Price}
                    path={e.path}
                    discount={e.discountedPrice}
                    origin={e.origin}
                    url={e.url}
                    count={e.count}
                    qr={e.qr}
                    likes={e.likes}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="section-container benefit-container">
        <div className="container">
          <div className="section-sub-container">
            <Title
              class="text-center mb-4"
              heading="Benefits of Livasa Honey"
            />
            <p className=" text-center mb-5">
              Livasa Pure Honey is a natural antioxidant. Honey is often used to
              build immunity and acts as a pre-workout energizer. A spoonful of
              honey is a perfect remedy for:
            </p>
          </div>
        </div>
        <img src={Benefits} alt="Benefits Image" />
      </div>

      {/* Our Clients Section */}
      <div className="section-container">
        <Title
          class="text-center mb-5"
          heading="Our Happy Clients
"
        />
        <div className="container">
          <Row>
            {review.map((e) => {
              return (
                <Col md={12} lg={4}>
                  <ReviewContainer
                    src={e.image}
                    reviews={e.review}
                    description={e.description}
                    ratings={e.ratings}
                  />{" "}
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}
