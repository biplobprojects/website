import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Products from "../products/Products";
import { AllProductsData } from "../AllProductsData";
import Title from "../titles/Title";

export default function RandomProducts() {
  const [products, setProducts] = useState(AllProductsData);
  const randomizeProduct = (products) =>
    [...products].sort(() => Math.random() - 0.5);

  const newList = randomizeProduct(products);
  console.log(newList, "randomizeProduct");

  return (
    <div>
      <Title heading="You may also like" class="mb-4" />
      <Row>
        {newList.slice(0, 4).map((e) => {
          return (
            <Col md={3}>
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
  );
}
