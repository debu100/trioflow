import React from "react";

const ToggleUi = ({ setDisp }) => {
  return (
    <div>
      <button
        className="dispBtn "
        onClick={() => setDisp((currDisp) => !currDisp)}
      >
        Toggle
      </button>

      {/* //? Whenever we want to upadte the value of the state it is best practice to update the value of that state using a callback function. That cb func receives an argument which holds the current value of the state and we ue that to update its value. */}

      {/* //* Here we can see that we don't even need to pass the disp as prop to the child component, by using the callback function the currDisp arg by default has access to the value of the current state and we can use that for updating its value */}

      {/* 
      
      //? "By default has access" — it’s not automatic magic; it’s because React intentionally passes the current state value into the callback function you provide to setDisp().

      //*  The callback you pass to setDisp() is not just “a callback” in general—it’s called the functional updater form.

      //?  “Best practice” depends on context—this form is best when the new state depends on the previous state. i.e when we are trying to update the value of state based of its current value */}
    </div>
  );
};

export default ToggleUi;
