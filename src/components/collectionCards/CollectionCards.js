import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCards.css";

export default function CollectionCards(props) {
  console.log(props);
  return (
    <Link to={props.path}>
    <div className="card-container">
      <div className="card-image-container mb-4">
        <img
          src={props.src}
          onMouseOver={(e) => (e.currentTarget.src = props.src1)}
        />
      </div>
      <div>
        <h5 className="text-center">{props.cardTitle}</h5>
      </div>
    </div>
    </Link>
  );
}
