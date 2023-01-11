import React from "react";
import Products from "../products/Products";
import Title from "../titles/Title";
import { AllProductsData } from "../AllProductsData";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import './FeaturedCollection.css';
export default function FeaturedCollection() {
  return (
    <>
      <Title class="text-center mb-4 headings" heading="Featured collection" />
      <Row>
        {AllProductsData.slice(0,2).map(
          ({
            image,
            title,
            Price,
            origin,
            count,
            discountedPrice,
            href,
            likes,
            qr,
            url,
          }) => (
            <Col md={12} lg={6} sm={12} xs={12}>
              <Products
                src={image}
                src1={url}
                produtName={title}
                discount={discountedPrice}
                productPrice={Price}
                origin={origin}
                url={url}
                count={count}
                qr={qr}
                likes={likes}
              />
            </Col>
          )
        )}
      </Row>
      <div className="text-center">
        <Link className="linkBtn" to="/collections/all">
          View all
        </Link>
      </div>
    </>
  );
}
