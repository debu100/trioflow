import { useState } from "react";
import Buttons from "./Buttons";
import Content from "./Content";
import "./css/style.css";
import Numbers from "./Numbers";
import ToggleUi from "./ToggleUi";

const messages = [
  "Learn React 🧑‍💻",
  "Apply for Jobs 😓",
  "Get Rejected always 🥲",
];

// const step = 3;

const App = () => {
  const [step, setStep] = useState(1);
  const [display, setDispaly] = useState(true);
  return (
    <div className="main-box">
      {display ? (
        <>
          <Numbers step={step} />
          <Content step={step} mssg={messages} />
          <Buttons
            step={step}
            func={setStep}
            disp={display}
            setDisp={setDispaly}
          />
        </>
      ) : null}

      {/* //? Conditionally rendering the ui on basis of display value */}

      {/*  <Numbers step={step} />
       <Content step={step} mssg={messages} />
      <Buttons step={step} func={setStep} disp={display} setDisp={setDispaly} /> */}
      <div className="toggle-container">
        <ToggleUi disp={display} setDisp={setDispaly} />
      </div>
    </div>
  );
};

export default App;
