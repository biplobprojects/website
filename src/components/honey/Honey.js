import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Title from "../../components/titles/Title";
import honey1 from "../../assets/images/Honey_1.jpg";
import honey2 from "../../assets/images/Honey_5.jpg";
import honey3 from "../../assets/images/Honey_8.jpg";
import honey4 from "../../assets/images/Honey_11.jpg";
import honey5 from "../../assets/images/Honey_250g_4.jpg";
import honey6 from "../../assets/images/Honey_250g_5.jpg";
import honey7 from "../../assets/images/Honey_250g_8.jpg";
import honey8 from "../../assets/images/Sidr_250g.jpg";
import honey9 from "../../assets/images/Honey_4.webp";
import beewax from "../../assets/images/beewax.webp";
import beepollene from "../../assets/images/beepollene.webp";
import Propolis from "../../assets/images/Propolis.webp";

import Products from "../products/Products";
import FilterOfcanvas from "../filterofcanvas/FilterOfcanvas";
export default function Honey() {
  const ProductCardData = [
    { image: honey1, title: "Acacia Honey", Price: "340.00" },
    { image: honey2, title: "Jammun Honey", Price: "269.00" },
    { image: honey3, title: "Wild Honey", Price: "330.00" },
    { image: honey4, title: "Litchi Honey", Price: "249.00" },
    { image: honey5, title: "Tulsi Honey", Price: "349.00" },
    { image: honey6, title: "Neem Honey", Price: "349.00" },
    { image: honey7, title: "Sidr Honey", Price: "279.00" },
    { image: honey8, title: "Multiflora Honey", Price: "230.00" },
    { image: honey9, title: "Comb Honey", Price: "649.00" },
    { image: beewax, title: "Bee Wax", Price: "450.00" },
    { image: beepollene, title: "Bee Pollen", Price: "230.00" },
    { image: Propolis, title: "Propolis", Price: "1,299.00" },
  ];

  return (
    <div className="container collection-container">
      <Title heading="Honey" />
      <FilterOfcanvas/>
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
  );
}
