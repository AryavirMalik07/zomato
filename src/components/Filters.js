import React from "react";
import "../styles/filters.css";
import Filteritems from "./Filteritems";
const Filters = ({ filterlist }) => {
  return (
    <div className="filters">
      {filterlist &&
        filterlist.map((filter) => {
          return <Filteritems filter={filter} key={filter.id} />;
        })}
    </div>
  );
};

export default Filters;
