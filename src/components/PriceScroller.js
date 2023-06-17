import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceSlider = () => {
  const [price, setPrice] = useState({ min: 0, max: 80000 });

  const handleChange = (value) => {
    setPrice(value);
  };

  return (
    <div className="price-slider-container">
      <div
        className="price-cone"
        style={{
          borderLeftWidth: `${((price.max - price.min) / 80000) * 450}px`,
        }}
      ></div>
      <InputRange
        minValue={0}
        maxValue={80000}
        value={price}
        onChange={handleChange}
        formatLabel={(value) => `$${value}`}
      />
    </div>
  );
};

export default PriceSlider;
