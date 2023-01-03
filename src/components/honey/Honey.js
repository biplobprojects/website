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
import SortData from "../sortdata/SortData";
export default function Honey() {
  const ProductCardData = [
    {
      bestseller: true,
      featured: true,
      image: honey1,
      title: "Acacia Honey",
      Price: 340.0,
      date: "Mon Oct 31 2020 00:00:00 GMT-0700 (PDT)",
    },
    {
      bestseller: true,
      featured: true,
      image: honey2,
      title: "Jammun Honey",
      Price: 269.0,
      date: "Wed Oct 31 2019 00:00:00 GMT-0700 (PDT)",
    },
    {
      bestseller: true,
      featured: true,
      image: honey3,
      title: "Wild Honey",
      Price: 330.0,
      date: "Mon Oct 31 2016 00:00:00 GMT-0700 (PDT)",
    },
    {
      bestseller: true,
      featured: true,
      image: honey4,
      title: "Litchi Honey",
      Price: 249.0,
      date: "Mon Oct 31 2022 00:00:00 GMT-0700 (PDT)",
    },
    {
      bestseller: true,
      featured: true,
      image: honey5,
      title: "Tulsi Honey",
      Price: 349.0,
      date: "Mon Nov 31 2022 00:00:00 GMT-0700 (PDT)",
    },
    {
      bestseller: true,
      featured: true,
      image: honey6,
      title: "Neem Honey",
      Price: 349.0,
      date: "Mon Mar 31 2017 00:00:00 GMT-0700 (PDT)",
    },
    {
      bestseller: true,
      featured: true,
      image: honey7,
      title: "Sidr Honey",
      Price: 279.0,
      date: "Mon Mar 31 2017 00:00:00 GMT-0700 (PDT)",
    },
    {
      bestseller: true,
      featured: true,
      image: honey8,
      title: "Multiflora Honey",
      Price: 230.0,
      date: "Fri Oct 31 2017 00:00:00 GMT-0700 (PDT)",
    },
    {
      bestseller: true,
      featured: true,
      image: honey9,
      title: "Comb Honey",
      Price: 649.0,
      date: "Mon Oct 31 2016 00:00:00 GMT-0700 (PDT)",
    },
    {
      bestseller: true,
      featured: true,
      image: beewax,
      title: "Bee Wax",
      Price: 450.0,
      date: "Mon Oct 31 2016 00:00:00 GMT-0700 (PDT)",
    },
    {
      bestseller: true,
      featured: true,
      image: beepollene,
      title: "Bee Pollen",
      Price: 230.0,
      date: "Fri Oct 31 2022 00:00:00 GMT-0700 (PDT)",
    },
    {
      bestseller: true,
      featured: true,
      image: Propolis,
      title: "Propolis",
      Price: 1299.0,
      date: "Mon Dec 30 2018 00:00:00 GMT-0700 (PDT)",
    },
  ];

  return (
    <div className="container collection-container">
      <Title heading="Honey" class="mb-3" />
      <FilterOfcanvas/>
      {/* <Row>
        <Col md={3}>
          <FilterOfcanvas />
        </Col>
        <Col md={4}>
          <SortData state={ProductCardData} />
        </Col>
        <Col md={3}>
          <h5>Products</h5>
        </Col>
      </Row> */}
          <SortData state={ProductCardData} />

      
    </div>
  );
}
