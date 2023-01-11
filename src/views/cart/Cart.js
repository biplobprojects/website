import React from "react";
import Title from "../../components/titles/Title";
import "./Cart.css";
import { Link } from "react-router-dom";
import FeaturedCollection from "../../components/featuedCollections/FeaturedCollection";
import CartTable from "../../components/cartTable/CartTable";

export default function Cart() {
  return (
    <div className="container cart-container">
      {/* <div className="cart-empty-container text-center">
        <Title class="text-center mb-4" heading="Your cart is empty" />
        <Link class="linkBtn  d-inline-block mb-5" to="/collections/all">
          Continue Shopping
        </Link>
      </div> */}
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-baseline">
          <Title
            heading="Your cart"/>
          <Link class="d-inline-block mb-5 anchorLink" to="/collections/all">
            Continue Shopping
          </Link>
        </div>
        <CartTable />
      </div>
      <div className="mt-5">
        <FeaturedCollection />
      </div>
    </div>
  );
}
