import React from "react";

const AttemptBubble = ({ filled }) => {
  return <div className={filled ? "filled bubble" : "bubble"}></div>;
};

export default AttemptBubble;
