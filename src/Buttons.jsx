import React from "react";

const Buttons = ({ step, func}) => {
  return (
    <div className="btn-box">
      {/* <button disabled={step === 1} onClick={() => step > 1 && func(step - 1)}>
        previous
      </button>
      <button disabled={step === 3} onClick={() => step < 3 && func(step + 1)}>
        next
      </button> */}

      {/* //? the below code is better as inside onClick is doesn't use the condition again */}

      <button disabled={step === 1} onClick={() => func(step - 1)}>
        previous
      </button>
      <button disabled={step === 3} onClick={() => func(step + 1)}>
        next
      </button>
    </div>
  );
};

export default Buttons;
