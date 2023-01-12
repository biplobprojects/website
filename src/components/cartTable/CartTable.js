import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import honey from "../../assets/images/Honey_1.jpg";
import "./CartTable.css";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { increament, decrement, clear } from "../../Features/CartSlice";
import {cartTotalPriceSelector} from "../../Features/TotalSlice"
export default function CartTable({cart}) {
  const totalPrice = useSelector(cartTotalPriceSelector)
// console.log(totalPrice,"totalPricetotalPricetotalPricetotalPrice")
//   console.log(cart,"cartCgeckkkkkkkkkkk")
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const decrementHandler = () => {
    setQuantity(quantity - 1);
  };

  const IncermentHandler = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="cart">
        <div className="mobile-hidden">
      <Row>
        <Col md={6}>
          <h6>PRODUCT</h6>
        </Col>
        <Col md={3} className="d-flex">
          <h6>QUANTITY</h6>
        </Col>
        <Col md={3} className="d-flex justify-content-end">
          <h6>TOTAL</h6>
        </Col>
      </Row>

      <hr></hr>
      </div>
      {cart.map((e) =>{
     return   <>
           <Row className="align-items-center">
           <Col md={6}>
             <div className="product-details-container">
               <img src={honey} className="me-2" />
               <p className="product-link">
                 <Link to={e.path}>{e.title}</Link>
               </p>
               <p>Rs. { e.Price }</p>
               <p>Size: {e.size}</p>
             </div>
           </Col>
   
           <Col md={3} className="d-flex align-items-center mt-md-0 mt-4">
             <div className="incrementDecrementContainer d-inline-block me-4">
               <button
                 className="d-inline-block mx-2"
                 disabled = {e.quantity  === 1}
                 onClick={() => {
                  dispatch(decrement(e.id));
                }}
               >
                 -
               </button>
               <p className="d-inline-block  mx-4 mb-0">{e.quantity}</p>
               <button
                 className="d-inline-block  mx-2"
                 onClick={() => {
                  dispatch(increament(e.id));
                 }}
               >
                 +
               </button>
             </div>
             <span>
               <BsTrash   onClick={() => {
                  dispatch(clear(e));
                 }}/>
             </span>
           </Col>
           <Col md={3} className="d-flex justify-content-md-end  mt-md-0 mt-4">
             <p className="mb-0 total-price">Rs. {e.quantity * e.Price }</p>
           </Col>
         </Row>
         <hr></hr>
         </>
      })}
      {/* <Row className="align-items-center">
        <Col md={6}>
          <div className="product-details-container">
            <img src={honey} className="me-2" />
            <p className="product-link">
              <Link>Apple Cider Vinegar</Link>
            </p>
            <p>Rs. 359.00</p>
            <p>Size: 500ml</p>
          </div>
        </Col>

        <Col md={3} className="d-flex align-items-center mt-md-0 mt-4">
          <div className="incrementDecrementContainer d-inline-block me-4">
            <span
              className="d-inline-block mx-2"
              onClick={() => {
                decrementHandler();
              }}
            >
              -
            </span>
            <p className="d-inline-block  mx-4 mb-0">{quantity}</p>
            <span
              className="d-inline-block  mx-2"
              onClick={() => {
                IncermentHandler();
              }}
            >
              +
            </span>
          </div>
          <span>
            <BsTrash />
          </span>
        </Col>
        <Col md={3} className="d-flex justify-content-md-end  mt-md-0 mt-4">
          <p className="mb-0 total-price">Rs. 359.00</p>
        </Col>
      </Row>
      <hr></hr> */}

      

      <div className="cart-footer ms-auto mt-5 mb-5">
        <div className="total d-flex align-items-baseline justify-content-md-end justify-content-center">
          <h3 className="total-subtotal me-4 mb-0">Subtotal</h3>
       {totalPrice > 0 &&  <p className="total-subtotal-value mb-0">Rs. {totalPrice}</p>}  
        </div>
        <span className="text-md-end text-center d-block mt-3 mb-3">Tax included and shipping calculated at checkout</span>
        <Link className="linkBtn d-block text-center" to="/">
          Check out
        </Link>
      </div>
    </div>
  );
}
