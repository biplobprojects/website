import React, { useState, useEffect } from "react";
import Title from "../../components/titles/Title";
import FilterOfcanvas from "../filterofcanvas/FilterOfcanvas";

import FilterSort from "../FilterSort/FilterSort";
import CollectionContainer from "../collectionContainer/CollectionContainer";
import { AllProductsData } from "../AllProductsData";
import { fetchProducts } from "../../Features/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Honey() {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productData = product.list

  const filterProductHoney = productData.filter((e) => {
    return e.honey == true;
  });

  return (
    <div className="container collection-container">
      <Title heading="Collections" class="mb-4" />
      <CollectionContainer />
      <Title heading="Honey" class="mb-5 mt-4" />

      <FilterSort obj={filterProductHoney} />
    </div>
  );
}
