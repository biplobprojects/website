import React, { useState } from "react";
import { useReducer } from "react";
import { getSortedData } from "../getSortedData";
import { getFilteredData } from "../getFilteredData";
import { reducer } from "../filterSortReducer";
import Products from "../products/Products";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Offcanvas from "react-bootstrap/Offcanvas";
import FilterIcon from "../../assets/images/settings-sliders.png";
import "./FilterSort.css";

export default function FilterSort(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [{ sortBy, InStock, OutStock }, dispatch] = useReducer(reducer, {
    sortBy: "none",
    InStock: false,
    OutStock: false,
  });
  const sortedData = getSortedData([...props.obj], sortBy);
  const filteredData = getFilteredData(sortedData, InStock, OutStock);

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "SORT", payload: userValue });
  };
  return (
    <div className="filter-sort-container">
      <Row className="justify-content-between align-items-center mb-5">
        <Col sm={5} xs={6} md={6}>
          <div className="filter-ofcanvas-container">
            <a variant="primary" onClick={handleShow}>
              <h6 className="mb-0">
                <img src={FilterIcon} className="me-1" /> Filter{" "}
                <span className=" d-inline-block mobile-visible">and Sort</span>
              </h6>
            </a>

            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h5 className="text-center mb-2">
                    Filter{" "}
                    <span className="mobile-visible d-inline-block">
                      and Sort
                    </span>
                  </h5>
                  <p className="text-center mb-0">Products 12</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="mb-4">
                  <h3 className="mb-3">Availability</h3>
                  <div class="form-group mb-2">
                    <label>
                      <input
                        type="checkbox"
                        name="filter"
                        onChange={() =>
                          dispatch({
                            type: "FILTER",
                            payload: "InStock",
                          })
                        }
                        checked={InStock}
                      />
                      In stock (12)
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        name="filter"
                        onChange={() =>
                          dispatch({
                            type: "FILTER",
                            payload: "OutStock",
                          })
                        }
                        checked={OutStock}
                      />
                      Out of stock (0)
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="mb-3">Price</h3>

                  <input
                    className="d-block mb-4"
                    type="range"
                    name="price"
                    min="10"
                    max="100"
                    value="100"
                    // onChange={updateFilterValue}
                  />
                </div>
                <div className="mobile-visible">
                  <label className=" me-4 ">Sort by :</label>
                  <select defaultValue={0} onChange={sorting}>
                    <option value="FEATURED">Featured</option>
                    <option value="BESTSELLER">Best Seller</option>
                    <option value="A_Z">Alphabetically, A-Z</option>
                    <option value="Z_A">Alphabetically, Z-A</option>
                    <option value="PRICE_LOW_TO_HIGH">
                      Price, Low to High
                    </option>
                    <option value="PRICE_HIGH_TO_LOW">
                      Price, High to Low
                    </option>
                    <option value="DATE_OLD_TO_NEW"> Date, Old to New</option>
                    <option value="DATE_NEW_TO_OLD">Date, New to Old</option>
                  </select>
                </div>
              </Offcanvas.Body>

              <div className="offcanvas-footer d-flex justify-content-between">
                <button
                  className="btn-primary"
                  onClick={() =>
                    dispatch({
                      type: "FILTER",
                      payload: "RemoveFilter",
                    })
                  }
                >
                  Remove all
                </button>
                <button> Apply </button>
              </div>
            </Offcanvas>
          </div>
        </Col>
        <Col
          lg={4}
          md={6}
          sm={3}
          xs={6}
          className="d-flex justify-content-end align-items-center"
        >
          <div className="mobile-hidden me-4">
            <label className=" me-3">Sort by :</label>
            <select defaultValue={0} onChange={sorting}>
              <option value="FEATURED">Featured</option>
              <option value="BESTSELLER">Best Seller</option>
              <option value="A_Z">Alphabetically, A-Z</option>
              <option value="Z_A">Alphabetically, Z-A</option>
              <option value="PRICE_LOW_TO_HIGH">Price, Low to High</option>
              <option value="PRICE_HIGH_TO_LOW">Price, High to Low</option>
              <option value="DATE_OLD_TO_NEW"> Date, Old to New</option>
              <option value="DATE_NEW_TO_OLD">Date, New to Old</option>
            </select>
          </div>
          <h6 className="mb-0">{sortedData.length} Products</h6>
        </Col>
      </Row>
      <Row>
        {filteredData.map(({ image, url, title, Price,path }) => (
          <Col md={6} lg={3} sm={6} xs={6}>
            <Products
              src={image}
              src1={url}
              produtName={title}
              productPrice={Price}
              path={path}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
