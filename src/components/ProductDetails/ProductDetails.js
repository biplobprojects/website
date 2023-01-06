import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./ProductDetails.css";
import { RWebShare } from "react-web-share";
import RandomProducts from "../randomproducts/RandomProducts";
import Title from "../titles/Title";
import {BsShareFill} from "react-icons/bs";
export default function ProductGallery(props) {
  const imgs = [...props.imageArray];
  const benefitsArray = props.benefits;
  const [currentImage, setCurrentImage] = useState(imgs[0]);
  const [quantity, setQuantity] = useState(1);

  const imageSlideHandler = (index) => {
    const NewImage = imgs[index];
    setCurrentImage(NewImage);
  };
  const decrementHandler = () => {
    setQuantity(quantity - 1);
  };

  const IncermentHandler = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="container ">
      <div className="product-detail-container mb-md-5 mb-4">
        <Row>
          <Col md={5} className="mb-5 mb-md-0">
            <img className="currentImage mb-4" src={currentImage.value} />
            <div className="d-flex justify-content-center thumbnail-image">
              {imgs.map((e, index) => {
                return (
                  <img
                    className={`${
                      currentImage.id === index ? "selectedImage" : " "
                    } mx-3`}
                    onClick={() => {
                      imageSlideHandler(index);
                    }}
                    src={e.value}
                    width="80"
                    height="80"
                  />
                );
              })}
            </div>
          </Col>
          <Col md={7} className="ps-md-5">
            <div className="product-description-container">
              <span>LIVASANATURAL</span>
              <Title heading={props.productName} class="mb-4" />
              <h5>Rs. {currentImage.price}</h5>
              <span className="mb-4 d-block">Tax included.</span>
              <p>{props.description}</p>
              <ul className="mb-4">
                {benefitsArray.map((e) => {
                  return (
                    <li>
                      <b>{e}</b>
                    </li>
                  );
                })}
              </ul>
              <span className="d-block mb-2">Size</span>
              {imgs.map((e, index) => {
                return (
                  <div
                    className={`${
                      currentImage.id === index
                        ? "selectedprice-container price-container"
                        : "price-container "
                    } d-inline-block me-3 mb-3`}
                    onClick={() => {
                      imageSlideHandler(index);
                      document.documentElement.scrollTo(0, 0);
                    }}
                  >
                    {e.size}
                  </div>
                );
              })}

              <span className="d-block mb-3">Quantity</span>

              <div className="incrementDecrementContainer d-inline-block mb-4">
                <span
                  className="d-inline-block mx-2"
                  onClick={() => {
                    decrementHandler();
                  }}
                >
                  -
                </span>
                <p className="d-inline-block  mx-4 mb-0">{quantity}</p>
                <span
                  className="d-inline-block  mx-2"
                  onClick={() => {
                    IncermentHandler();
                  }}
                >
                  +
                </span>
              </div>
              <div className="mb-2">
                <button className="d-block w-100 mb-2 cartButton">Add to cart</button>
                <button className="d-block w-100 buyButton">Buy it now</button>
              </div>

              <RWebShare
                data={{
                  text: "livasanatural",
                  url: "http://localhost:3000",
                  title: `${props.productName} - livasanatural`,
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button className="shareButton d-flex align-items-center w-100 justify-content-center"> <BsShareFill className="h5 me-3 mb-0"/>Share</button>
              </RWebShare>
            </div>
          </Col>
        </Row>
        </div>

        <RandomProducts/>
    </div>
  );
}
