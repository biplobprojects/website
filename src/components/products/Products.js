import React from "react";
import "./Products.css";
export default function Products(props) {
  return (
    <div className="product-main-container text-center mb-md-5 mb-4">
      <div className="product-container mb-3">
        <img src={props.src} />
        <img className="hoverableImage" src={props.src1} />
      </div>

      <h4 className="d-inline-block mb-2">{props.produtName}</h4>
      <p>From Rs. {props.productPrice}</p>
    </div>
  );
}
