import React from "react";

function Button({ textButton, background_Color, Width, Height, handleSubmit }) {
  return (
    <button
      style={{
        backgroundColor: background_Color,
        width: Width,
        height: Height,
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleSubmit}
    >
      {textButton}
    </button>
  );
}

export { Button };
