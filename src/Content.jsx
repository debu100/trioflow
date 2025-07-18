import React from "react";

const Content = ({ step, mssg }) => {
  return (
    <div className="content-box">
      <h1>
        {/* //? Using State */}
        step {step}: {mssg[step - 1]}
      </h1>
    </div>
  );
};

export default Content;
