import React from "react";
import { Link } from "react-router-dom";
const Country = ({ name, alpha3Code, flag }) => (
  <div>
    <h2 key={alpha3Code}>
      <Link to={`/details/${alpha3Code}`}>
        <span>
          {name} ({alpha3Code})
        </span>
      </Link>
    </h2>
    <img src={flag} alt="flag" />
  </div>
);

export default Country;
