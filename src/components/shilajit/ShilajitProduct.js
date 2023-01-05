import React, { useState } from "react";
import CollectionContainer from "../collectionContainer/CollectionContainer";
import FilterSort from "../FilterSort/FilterSort";
import Title from "../titles/Title";
import { AllProductsData } from "../AllProductsData";

export default function ShilajitProduct() {
  const [productData, setProductData] = useState(AllProductsData);

  const silajitProductData = productData.filter((e) => e.shilajit == true);
  return (
    <div className="container collection-container">
      <Title heading="Collections" class="mb-4" />
      <CollectionContainer />
      <Title heading="Shilajit" class="mb-5 mt-4" />
      <FilterSort obj={silajitProductData} />
    </div>
  );
}
