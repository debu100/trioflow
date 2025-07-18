import React from "react";

const Numbers = ({ step }) => {
  return (
    <div className="num-box">
      {/* //? Using State */}
      <p className={`${step >= 1 ? "active" : ""}`}>1</p>
      <p className={`${step >= 2 ? "active" : ""}`}>2</p>
      <p className={`${step >= 3 ? "active" : ""}`}>3</p>
    </div>
  );
};

export default Numbers;
