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
import honey1 from "../../assets/images/Honey_1.jpg";
import honey11 from "../../assets/images/Honey_2.jpg";
import honey2 from "../../assets/images/Honey_5.jpg";
import honey22 from "../../assets/images/Honey_6.jpg";
import honey3 from "../../assets/images/Honey_8.jpg";
import honey33 from "../../assets/images/Honey_9.jpg";
import honey4 from "../../assets/images/Honey_11.jpg";
import honey44 from "../../assets/images/Honey_12.jpg";
import honey5 from "../../assets/images/Honey_250g_4.jpg";
import honey55 from "../../assets/images/Honey_500g_4.jpg";
import honey6 from "../../assets/images/Honey_250g_5.jpg";
import honey66 from "../../assets/images/Honey_500g_5.jpg";
import honey7 from "../../assets/images/Honey_250g_8.jpg";
import honey77 from "../../assets/images/Honey_500g_8.jpg";
import honey8 from "../../assets/images/Sidr_250g.jpg";
import honey88 from "../../assets/images/Sidr_500g.jpg";
import  data  from "../../test.json";
import CollectionContainer from "../../components/collectionContainer/CollectionContainer";
export default function Home() {

console.log(data,"kghikigj")
  const ProductCardData = [
    { image: honey1, url: honey11, title: "Acacia Honey", Price: "340.00" },
    { image: honey2, url: honey22, title: "Jammun Honey", Price: "269.00" },
    { image: honey3, url: honey33, title: "Wild Honey", Price: "330.00" },
    { image: honey4, url: honey44, title: "Litchi Honey", Price: "249.00" },
    { image: honey5, url: honey55, title: "Tulsi Honey", Price: "349.00" },
    { image: honey6, url: honey66, title: "Neem Honey", Price: "349.00" },
    { image: honey7, url: honey77, title: "Sidr Honey", Price: "279.00" },
    { image: honey8, url: honey88, title: "Multiflora Honey", Price: "230.00" },
  ];
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
          <CollectionContainer/>
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
            {ProductCardData.map((e) => {
              return (
                <Col md={6} lg={3} sm={6} xs={6}>
                  <Products
                    src={e.image}
                    src1={e.url}
                    produtName={e.title}
                    productPrice={e.Price}
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
        <Title class="text-center mb-5" heading="Our Happy Clients
" />
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
