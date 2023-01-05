import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Title from "../../components/titles/Title";

import Products from "../products/Products";
import FilterOfcanvas from "../filterofcanvas/FilterOfcanvas";
import SortData from "../sortdata/SortData";
import FilterSort from "../FilterSort/FilterSort";
import CollectionContainer from "../collectionContainer/CollectionContainer";
import {AllProductsData} from "../AllProductsData"
export default function Honey() {
  const [productData, setProductData] = useState(AllProductsData)
  

  const filterProductHoney = productData.filter(e => {return e.honey == true
  }) 
  

  return (
    <div className="container collection-container">
      <Title heading="Collections" class="mb-4"/>
      <CollectionContainer/>
   <Title heading="Honey" class="mb-5 mt-4" />
    {/*<FilterOfcanvas/> */}
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
          {/* <SortData state={ProductCardData} /> */}

          <FilterSort obj={filterProductHoney}/>

      
    </div>
  );
}
