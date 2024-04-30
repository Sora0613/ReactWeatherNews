// Spinner.tsx
import React from "react";
import "../styles/Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <svg width="120" height="120" viewBox="-60 -60 120 120">
        <circle r="50" />
      </svg>
    </div>
  );
};

export default Spinner;
