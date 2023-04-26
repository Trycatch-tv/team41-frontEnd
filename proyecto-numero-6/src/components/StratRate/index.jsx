import React, { useState } from "react";
import "./starRate.css";

function StartRate({ totalStars }) {
  const [selectedStars, setSelectedStars] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleStarSelection = (star) => {
    setSelectedStars(star);
  };

  const handleStarHover = (star) => {
    setHoveredStar(star);
  };

  const handleStarHoverEnd = () => {
    setHoveredStar(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You selected ${hoveredStar} out of 5 stars!`);
    setSelectedStars(0);
    setHoveredStar(0);
  };
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <label key={i}>
          <input
            type="radio"
            name="rating"
            id={`star-${i}`}
            value={i + 1}
            checked={selectedStars === i + 1}
            onChange={() => handleStarSelection(i + 1)}
          />
          <div
            className={`star ${
              i + 1 <= hoveredStar || i + 1 <= selectedStars
                ? "star-filled"
                : ""
            }`}
            onMouseEnter={() => handleStarHover(i + 1)}
            onMouseLeave={() => handleStarHoverEnd()}
            onClick={handleSubmit}
          >
            &#9733;
          </div>
        </label>
      ))}
    </div>
  );
}

export { StartRate };
