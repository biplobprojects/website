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
import InputField from "../Inputfields/InputField";
import { GrFormClose } from "react-icons/gr";
export default function FilterSort(props) {
  const [value, setValue] = useState(0);
  const MAX = 10;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    };
  };
  const arrayData = [...props.obj];

  const [show, setShow] = useState(false);
  // const [priceRange, setPriceRange] = useState({ from: 50, to: 250 });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [{ sortBy }, dispatch] = useReducer(reducer, {
    sortBy: "none",
    InStock: false,
    OutStock: false,
  });
  const [OutStock, setOutStock] = useState(false);
  const [InStock, setInStock] = useState(false);
  const [priceRange, setPriceRange] = useState();
  const [startPrice, setStartPrice] = useState();
  const [endPrice, setEndPrice] = useState();
  const sortedData = getSortedData([...props.obj], sortBy);
  const filteredData = getFilteredData(
    sortedData,
    InStock,
    OutStock,
    startPrice,
    endPrice,
    priceRange
  );

  const removeFilterHandler = () => {
    setStartPrice(false);
    setEndPrice(false);
    setOutStock(false);
    setInStock(false);
    handleClose();
  };
  // const filteredData = filteredData1.filter((e) => {
  //   return e.Price >= startPrice && e.Price <= endPrice;
  // });
  // filteredData3.includes(filteredData)

  // filteredData.push[filteredData3];
  // console.log(filteredData3)
  // if(filteredData3.length){
  //   filteredData.push(filteredData3)

  // }
  let AllPrice = arrayData.map((e) => {
    return e.Price;
  });
  let highestPrice = Math.max.apply(null, AllPrice);

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "SORT", payload: userValue });
  };
  return (
    <div className="filter-sort-container">
      <Row className="justify-content-between align-items-center mb-5">
        <Col sm={5} xs={6} md={4}>
          <div className="filter-ofcanvas-container">
            <a variant="primary" onClick={handleShow}>
              <h6 className="mb-0">
                <img src={FilterIcon} className="me-1" /> Filter
                <span className=" d-inline-block mobile-visible">and Sort</span>
              </h6>
            </a>

            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h5 className="text-center mb-2">
                    Filter
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
                        onChange={() => setInStock(!InStock)}
                        checked={InStock}
                      />
                      In stock
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        name="filter"
                        onChange={() => setOutStock(!OutStock)}
                        checked={OutStock}
                      />
                      Out of stock
                    </label>
                  </div>
                </div>
                <div className="price-filter-container mb-4">
                  <h3 className="mb-3">Price</h3>
                  <p className="higestPrice">
                    The highest price is Rs. {highestPrice}
                  </p>
                  <Row>
                    <Col md={4} xs={6}>
                      <span>₹</span>{" "}
                      <input
                        placeholder="From"
                        htmlFor="from"
                        type="number"
                        id="from"
                        value={startPrice}
                        onChange={(e) => {
                          setStartPrice(e.target.value);
                        }}
                      />
                    </Col>

                    <Col md={4} xs={6}>
                      <span>₹</span>{" "}
                      <input
                        htmlFor="to"
                        type="number"
                        id="to"
                        placeholder="To"
                        value={endPrice}
                        onChange={(e) => {
                          setEndPrice(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>
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
                <button className="btn-primary" onClick={removeFilterHandler}>
                  Remove all
                </button>
                <button onClick={handleClose}> Apply </button>
              </div>
            </Offcanvas>
          </div>
        </Col>
        <Col
          lg={4}
          md={8}
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
          <h6 className="mb-0">{filteredData.length} Products</h6>
        </Col>
      </Row>
      <div className="mb-3">
        {startPrice && endPrice && (
          <p className="d-inline-block pricerange-container me-2">
            Rs. {startPrice} - Rs. {endPrice}{" "}
            <span
              className="d-inline-block ms-2"
              onClick={() => {
                setStartPrice(false);
                setEndPrice(false);
              }}
            >
              <GrFormClose />
            </span>
          </p>
        )}

        {InStock && (
          <p className=" me-2 d-inline-block pricerange-container">
            Availability: In stock
            <span
              className="d-inline-block ms-2"
              onClick={() => {
                setInStock(false);
              }}
            >
              <GrFormClose />
            </span>
          </p>
        )}

        {OutStock && (
          <p className="me-2 d-inline-block pricerange-container">
            Availability: Out Stock
            <span
              className="d-inline-block ms-2"
              onClick={() => {
                setOutStock(false);
              }}
            >
              <GrFormClose />
            </span>
          </p>
        )}
        {((startPrice && endPrice) || InStock || OutStock) && (
          <p
            className="d-inline-block remove-all-btn"
            onClick={removeFilterHandler}
          >
            Remove All
          </p>
        )}
      </div>
      <Row>
        {filteredData.map(
          ({
            image,
            title,
            Price,
            origin,
            count,
            discountedPrice,
            href,
            likes,
            qr,
            url,
            id
          }) => (
            <Col md={12} lg={6} sm={12} xs={12}>
              <Products
                src={image}
                src1={url}
                produtName={title}
                discount={discountedPrice}
                productPrice={Price}
                origin={origin}
                url={url}
                count={count}
                qr={qr}
                likes={likes}
                id={id}
              />
            </Col>
          )
        )}
      </Row>
    </div>
  );
}
