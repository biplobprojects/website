import React, { useState } from "react";
import Products from "../products/Products";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "./SortData.css"
export default function SortData(props) {
  const [users, setUsers] = useState(props.state);

  function onSelectionChange(e) {
    const sortDirection = e.target.value;
    const copyArray = [...users];
    if (sortDirection == 0) {
      copyArray.filter((e) => {
        return e.featured == true;
      });
      setUsers(copyArray);
    } else if (sortDirection == 1) {
      copyArray.filter((e) => {
        return e.bestseller == true;
      });
      setUsers(copyArray);
    } else if (sortDirection == 2) {
      copyArray.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setUsers(copyArray);
    } else if (sortDirection == 3) {
      copyArray.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      setUsers(copyArray);
    } else if (sortDirection == 4) {
      copyArray.sort((a, b) => {
        return a.Price - b.Price;
      });
      setUsers(copyArray);
    } else if (sortDirection == 5) {
      copyArray.sort((a, b) => {
        return b.Price - a.Price;
      });
      setUsers(copyArray);
    } else if (sortDirection == 6) {
      copyArray.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      setUsers(copyArray);
    } else if (sortDirection == 7) {
      copyArray.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setUsers(copyArray);
    } else {
      setUsers(copyArray);
    }
  }
  return (
    <div className="sort-container">
      <div  className="d-flex justify-content-end mb-5">
      <label className=" me-4">Sort by :</label>
      <select defaultValue={0} onChange={onSelectionChange}>
        <option value={0}>Featured</option>
        <option value={1}>Best Seller</option>
        <option value={2}>Alphabetically, A-Z</option>
        <option value={3}>Alphabetically, Z-A</option>
        <option value={4}>Price, Low to High</option>
        <option value={5}>Price, High to Low</option>
        <option value={6}> Date, Old to New</option>
        <option value={7}>Date, New to Old</option>
      </select>
      </div>
      <Row>
        {users.map((e) => {
          return (
            <Col md={6} lg={3} sm={6} xs={6}>
              <Products
                src={e.image}
                src1={e.url}
                produtName={e.title}
                productPrice={e.Price}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
