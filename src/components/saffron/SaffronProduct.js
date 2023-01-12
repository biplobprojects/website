import React, { useState, useEffect } from "react";
import CollectionContainer from "../collectionContainer/CollectionContainer";
import FilterSort from "../FilterSort/FilterSort";
import Title from "../titles/Title";
import { AllProductsData } from "../AllProductsData";
import ProductGallery from "../ProductDetails/ProductDetails";
import { fetchProducts } from "../../Features/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
export default function SaffronProduct() {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productData = product.list

  const saffronProductData = productData.filter((e) => {
    return e.saffron == true;
  });
  
  return (
    <div className="container collection-container">
      <Title heading="Collections" class="mb-4" />
      <CollectionContainer />
      <Title heading="Saffron" class="mb-5 mt-4" />
      <FilterSort obj={saffronProductData} />

    </div>
  );
}
