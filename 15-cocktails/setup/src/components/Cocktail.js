import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, glass, name, id, info }) => {
  return (
    <div>
      <article className="cocktail">
        <div className="img-container">
          <img src={image} alt="" />
        </div>
        <div className="cocktail-footer">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
          <Link to ={`/cocktail/${id}`} className="btn btn-primary">More Details</Link>
        </div>
      </article>
    </div>
  );
};

export default Cocktail;
