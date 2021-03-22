import React, { useState } from "react";

const Tour = ({ id, image, info, price, name ,removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt="" />
      <footer>
        <div className="tour-info">
          <h3>{name}</h3>
          <h4 className="tour-price">$1{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show Less' :'read More'}</button>
        </p>
        <button className="delete-btn" onClick={()=>removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
