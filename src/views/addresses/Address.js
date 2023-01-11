import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Inputfields/Button";
import Title from "../../components/titles/Title";
import "./Address.css";

import AddressForm from "../../components/addressForm/AddressForm";
export default function Address() {
  return (
    <div className=" container address-container">
      <Title class="mb-4 text-center" heading="Addresses" />
      <Link className="d-block mb-4 text-center" to="/account/login">
        Return to Account details
      </Link>

      <Button classname="d-block mx-auto mb-5" buttonText="Add a new address" />
      <Title heading="Default" class="pt-4 mb-3 form-title text-center" />
      <div className="data-address-container text-center">
        <p className="mb-3">FirstName LastName <br></br> India</p>
        
        <div className="data-address-btn-container">
          <Button buttonText="Edit" classname ="me-3" />
          <Button buttonText="Delete" />
        </div>
      </div>

      {/* <div className="mt-4">
      <Title class="h4 form-title mb-4" heading="Add a new address"/>
      <AddressForm/>
      </div> */}
    </div>
  );
}
