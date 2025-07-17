import React from "react";

const ToggleUi = ({ disp, setDisp }) => {
  return (
    <div>
      <button className="dispBtn " onClick={() => setDisp(!disp)}>
        Toggle
      </button>
    </div>
  );
};

export default ToggleUi;
