import React, { useState } from "react";
import CollectionContainer from "../collectionContainer/CollectionContainer";
import FilterSort from "../FilterSort/FilterSort";
import Title from "../titles/Title";
import { AllProductsData } from "../AllProductsData";

export default function Vinegar() {
  const [productData, setProductData] = useState(AllProductsData);

  const vinegarProductData = productData.filter((e) => e.vinegar == true);
  return (
    <div className="container collection-container">
      <Title heading="Collections" class="mb-4" />
      <CollectionContainer />
      <Title heading="Vinegar" class="mb-5 mt-4" />
      <FilterSort obj={vinegarProductData} />
    </div>
  );
}

