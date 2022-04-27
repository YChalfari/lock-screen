import React, { useState } from "react";
import AttemptsBar from "./AttemptsBar";
import Button from "./Button";
import numpad from "./constants/NumpadMap";
import "./Locker.module.css";
import "./locker.css";
const Locker = ({ pinCode, onUnlock }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [codeInput, setCodeInput] = useState([]);
  let maxStep = pinCode.toString().length;

  const isCodeCorrect = (code) =>
    code.join("") === pinCode.toString() ? true : false;

  const isMaxStep = () => (currentStep === maxStep ? true : false);

  const handleBackSpacePress = () => {
    if (currentStep === 1) {
      return;
    }
    setCurrentStep((prev) => prev - 1);
    console.log(codeInput.slice(0, codeInput.length - 1));
    setCodeInput((prev) => prev.slice(0, prev.length - 1));
  };

  const handleNumpadPress = (value) => {
    console.log({ codeInput: [...codeInput, value], value, currentStep });
    if (value === "back") {
      return handleBackSpacePress();
    }
    setCurrentStep((prev) => prev + 1);
    if (isMaxStep()) {
      if (isCodeCorrect([...codeInput, value])) {
        onUnlock();
      }
      setCurrentStep(1);
      setCodeInput([]);
      return;
    }
    setCodeInput((prev) => [...prev, value]);
  };

  const renderButtons = () => {
    return numpad.map((num) => {
      return (
        <Button key={num.value} value={num.value} onClick={handleNumpadPress} />
      );
    });
  };
  return (
    <div className="locker">
      <AttemptsBar step={currentStep} maxStep={maxStep} />
      <div className="numpad">{pinCode && renderButtons()}</div>
    </div>
  );
};

export default Locker;
