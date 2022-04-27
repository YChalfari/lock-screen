import React from "react";
import AttemptBubble from "./AttemptBubble";
const AttemptsBar = ({ step, maxStep }) => {
  const renderBubbles = () => {
    const mapableArray = Array(maxStep).fill("");
    return mapableArray.map((s, i) => {
      return <AttemptBubble key={`bubble-${i}`} filled={i < step - 1} />;
    });
  };

  return <div className="attempts-bar flex center-self">{renderBubbles()}</div>;
};

export default AttemptsBar;
