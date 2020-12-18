import React from "react";

const Button = ({ onMix, message }) => {
  return (
    <div className="mt-4 text-center">
      <button className="btn btn-success" onClick={onMix}>
        {message}
      </button>
    </div>
  );
};

export default Button;
