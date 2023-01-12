import React, { useState, useEffect } from "react";
import FilterSort from "../FilterSort/FilterSort";
import Title from "../titles/Title";
import { AllProductsData } from "../AllProductsData";
import { useDispatch, useSelector } from "react-redux";
import {fetchProducts} from "../../Features/ProductSlice"
export default function AllProducts() {
  // const [productData, setProductData] = useState(AllProductsData);
const dispatch =  useDispatch()
const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

 
  const productData = products.list

  console.log(products,"jlj")
  return (
    <div className="container collection-container">
      <Title heading="Products" class="mb-5" />
      {products.list.map(e=>{
        return e.id;
      })}
      
      <FilterSort obj={productData} />
    </div>
  );
}
