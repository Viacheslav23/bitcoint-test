import React from "react";

import "./Result.css";

const ResultContent = ({ data, name }) => {
  return (
    <div className="result-content-wrapper">
      <div className="result-content-header">
        Convert:{" "}
        <span className="result-first-currency">{name.slice(0, 3)}</span>/
        <span className="result-second-currency">{name.slice(3, 6)}</span>
      </div>
      <div className="result-content-data">
        1 <span className="result-first-currency">{name.slice(0, 3)}</span> ={" "}
        {data.last}{" "}
        <span className="result-second-currency">{name.slice(3, 6)}</span>
      </div>
    </div>
  );
};

export default ResultContent;
