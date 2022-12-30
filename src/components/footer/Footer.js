import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { NavLink, Link } from "react-router-dom";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <hr className="footer-hr mb-5"></hr>

      <div className="container footer-container">
        <Row>
          <Col md={4}>
            <h3 className="mb-4">Help Center</h3>
            <ul className="list-unstyled">
              <li>
                <NavLink className="mb-3 d-inline-block" to="/my-account">
                  My Account
                </NavLink>
              </li>
              <li>
                <NavLink className="mb-3 d-inline-block" to="/ourstory">
                  Our Story
                </NavLink>
              </li>
              <li>
                <NavLink className="mb-3 d-inline-block" to="/blogs">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink className="mb-3 d-inline-block" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink className="mb-3 d-inline-block" to="/shop-all">
                  Shop All
                </NavLink>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h3 className="mb-4">Quick links</h3>
            <ul className="list-unstyled">
              <li>
                <NavLink className="d-inline-block mb-3" to="/terms-conditions">
                  Billing Terms and Conditions
                </NavLink>
              </li>
              <li>
                <NavLink className="d-inline-block mb-3" to="/privacy-policy">
                  Cookie & Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink className="d-inline-block mb-3" to="/refund-policy">
                  Return & Refund Policy
                </NavLink>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h3 className="mb-4">Support Information</h3>
            <p className="mb-1">
              <strong>Address:</strong>{" "}
            </p>
            <p className="mb-4">
              Ground Floor E4/325, Thoker No.6, Abufazal enclave part -2, High
              tension line, Shaheen Bagh, Jamia Nagar Okhla New Delhi - 110025
            </p>
            <p className="mb-1">
              <strong>Customer Care:</strong>{" "}
            </p>
            <p className="mb-4">
              <a className="d-inline-block me-2" href="tel:+91-9717199172">
                +91-9717199172,
              </a>
              <a className="d-inline-block  me-2" href="tel:+91-9717133818">
                +91-9717133818,
              </a>
              <a className="d-inline-block" href="tel:+91-1143728839">
                +91-1143728839
              </a>
            </p>
            <p>
              <strong>Email: </strong>
              <a href="mailto:hello@livasanatural.com">
                hello@livasanatural.com
              </a>
            </p>
          </Col>
        </Row>

        <div className="social-media-icons mb-5 mt-5">
          <FaFacebookSquare className="me-3" />
          <BsInstagram />
        </div>
      </div>
      <hr className="footer-hr"></hr>
      <div className="copyright-container d-flex justify-content-center">
        <p>© 2022, <Link to="/">livasanatural</Link> | All Right Reserved</p>
      </div>
    </div>
    
  );
}
