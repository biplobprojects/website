import React, { useState } from "react";
import "./Products.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import Button from "../../components/Inputfields/Button";
export default function Products(props) {
  const likes = props.likes;
  const [liked, setLiked] = useState(likes);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLiked(likes - 1);
    } else {
      setLiked(likes + 1);
    }
    setIsClicked(!isClicked);
  };
  return (
    <div className="product-main-container mb-md-5 mb-4 ">
      {/* <div className="product-container mb-3">
        <img src={props.src} />
        <img className="hoverableImage" src={props.src1&&props.src1 ?props.src1 : props.src} />
      </div>

      <h4 className="d-inline-block mb-2">{props.produtName}</h4>

      <p>
        MRP: <span>{props.productPrice}</span>
      </p>
      <p>
        Discounted Price: <span>{props.productPrice}</span>
      </p>
      <p>
        Certificates: <span>{props.productPrice}</span>
      </p>
      <p>
        Count: <span>{props.count}</span>
      </p>
      <p>
        Country of Origin: <span>{props.origin}</span>
      </p>
      <p>
        Product Details:{" "}
        <a target="_blank" href={props.url}>
          {props.url}
        </a>
      </p>
      <p>
        Likes:<span>{props.likes}</span>
      </p>
      <img className = "d-block mb-2" width="50" height="50" src={props.qr} />
     
      <Button buttonText="Add To Cart"></Button> */}
      <Row className="">
        <Col md={6}>
          <div className="product-container">
            <img src={props.src} />
          </div>
        </Col>

        <Col md={6}>
          <h4 className="d-inline-block mb-2">{props.produtName}</h4>
          <p>
            Product Details:{" "}
            <a target="_blank" href={props.url}>
              {props.url}
            </a>
          </p>
          <p>
            Country of Origin: <span>{props.origin}</span>
          </p>
          <p>
            MRP: <span className="priceSpan">{props.productPrice}</span>
          </p>
          <p>
            Discounted Price: <span>{props.discount}</span>
          </p>
          <p>
            Certificates: <span>Certificates</span>
          </p>
          <p>
            Count: <span>{props.count}</span>
          </p>

          <p className="likeSection">
            <span>{liked} </span>{" "}
            <AiOutlineLike
              className={`${isClicked ? "fillpath" : ""} `}
              onClick={handleClick}
            />
          </p>
          <img className="d-block mb-2" width="70" height="70" src={props.qr} />

          <Button onClick={props.onClick} buttonText="Add To Cart"></Button>
        </Col>
      </Row>
    </div>
  );
}
