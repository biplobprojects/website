import React from "react";
import Title from "../../components/titles/Title";
import "./Cart.css";
import { Link } from "react-router-dom";
import FeaturedCollection from "../../components/featuedCollections/FeaturedCollection";
import CartTable from "../../components/cartTable/CartTable";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalPriceSelector} from "../../Features/TotalSlice"
import { increament, decrement, clear } from "../../Features/CartSlice";

export default function Cart() {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);
  console.log(totalPrice)
console.log(cart,"cccccccccccccccccc")
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
        <CartTable  cart = {cart} />
      </div>
      <div className="mt-5">
       
        <FeaturedCollection />
      </div>
    </div>
  );
}
