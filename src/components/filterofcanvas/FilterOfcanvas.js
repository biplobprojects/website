import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function FilterOfcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a variant="primary" onClick={handleShow}>
        Filter
      </a>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h3>Filter</h3>
          <p>Products 12</p></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
