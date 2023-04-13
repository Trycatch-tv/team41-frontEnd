import React from "react";

function Button({ textButton, background_Color, Width, Height, handleSubmit }) {
  return (
    <button
      style={{
        backgroundColor: background_Color,
        width: Width || "150px",
        height: Height || "100px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleSubmit}
    >
      {textButton ? textButton : "Button"}
    </button>
  );
}

export { Button };
