import React from "react";

const Buttons = ({ step, func }) => {
  return (
    <div className="btn-box">
      {/* <button disabled={step === 1} onClick={() => step > 1 && func(step - 1)}>
        previous
      </button>
      <button disabled={step === 3} onClick={() => step < 3 && func(step + 1)}>
        next
      </button> */}

      {/* //? the below code is better as inside onClick is doesn't use the condition again */}
      {/* //? Updating the state value */}
      <button
        disabled={step === 1}
        onClick={() => func((currStep) => currStep - 1)}
      >
        previous
      </button>
      <button
        disabled={step === 3}
        onClick={() => func((currStep) => currStep + 1)}
      >
        next
      </button>

      {/* //? Whenever we want to upadte the value of the state it is best practice to update the value of that state using a callback function. That cb func receives an argument which holds the current value of the state and we ue that to update its value. */}
    </div>
  );
};

export default Buttons;
