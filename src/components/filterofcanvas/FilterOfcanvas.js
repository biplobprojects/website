import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import FilterIcon from "../../assets/images/filter.png";
import "./FilterOfcanvas.css";
export default function FilterOfcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="filter-ofcanvas-container">
      <a variant="primary" onClick={handleShow}>
        {/* <img src={FilterIcon} />  */}
        Filter
      </a>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h5 className="text-center mb-2">Filter</h5>
            <p className="text-center mb-0">Products 12</p>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-4">
            <h3 className="mb-3">Availability</h3>
            <div class="form-group mb-2">
              <input type="checkbox" id="Instock" />
              <label for="Instock">In stock (12)</label>
            </div>
            <div class="form-group">
              <input disabled type="checkbox" id="OutOfStock" />
              <label for="OutOfStock">Out of stock (12)</label>
            </div>
          </div>
          <div>
          <h3 className="mb-3">Price</h3>
          </div>
        </Offcanvas.Body>

        <div className="offcanvas-footer d-flex justify-content-between">
          <button className="btn-primary"> Remove all </button>
          <button> Apply </button>
        </div>
      </Offcanvas>
    </div>
  );
}
