import React from "react";
import "../styles/filteritem.css";
const Filteritems = ({ filter }) => {
  return (
    <div className="filteritem">
      {filter.icon && filter.icon}
      <div className="filterName">{filter.title}</div>
    </div>
  );
};

export default Filteritems;
