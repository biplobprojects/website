import React, { useState } from "react";
import CollectionContainer from "../collectionContainer/CollectionContainer";
import FilterSort from "../FilterSort/FilterSort";
import Title from "../titles/Title";
import { AllProductsData } from "../AllProductsData";
import ProductGallery from "../ProductDetails/ProductDetails";

export default function SaffronProduct() {
  const [productData, setProductData] = useState(AllProductsData);
  const saffronProductData = productData.filter((e) => e.saffron == true);
  
  return (
    <div className="container collection-container">
      <Title heading="Collections" class="mb-4" />
      <CollectionContainer />
      <Title heading="Saffron" class="mb-5 mt-4" />
      <FilterSort obj={saffronProductData} />

    </div>
  );
}
