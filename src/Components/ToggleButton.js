import React from "react";

function ToggleButton({ props, onClick }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: props.quantity === 0 ? "green" : "red" }}
      onClick={() => {
        onClick(props.id);
      }}
    >
      Switch
    </button>
  );
}

export default ToggleButton;
