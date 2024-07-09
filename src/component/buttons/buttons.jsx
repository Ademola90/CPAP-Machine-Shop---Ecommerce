import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons = ({ bg, text, color, css, onClick, width }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`tw-w-32 tw-h-10 tw-rounded-lg ${bg} ${width} ${color} ${css} `}
      >
        {text}
      </button>
    </div>
  );
};

export default Buttons;
