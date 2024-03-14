import React from "react";

const ProgressBar = ({
  height,
  marginTop,
  backgroundColor,
  progressColor,
  progressData,
  width,
  position,
}) => {
  return (
    <div
      style={{
        borderRadius: "20px",
        width,
        position,
        zIndex: "1",
        height,
        marginTop,
        backgroundColor,
      }}
    >
      <div
        style={{
          borderRadius: "20px",

          height,
          width: progressData,
          backgroundColor: progressColor,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
