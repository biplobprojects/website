import React, { useState } from "react";
import FilterSort from "../FilterSort/FilterSort";
import Title from "../titles/Title";
import { AllProductsData } from "../AllProductsData";

export default function AllProducts() {
  const [productData, setProductData] = useState(AllProductsData);

  return (
    <div className="container collection-container">
      <Title heading="Products" class="mb-5" />
      <FilterSort obj={productData} />
    </div>
  );
}
