import React, { useState } from "react";
import FormulaCalculator from "./FormulaCalculator";
import "../styles/WeightInput.css";

const WeightInput: React.FC = () => {
  const [pounds, setPounds] = useState<number>(0);
  const [ounces, setOunces] = useState<number>(0);

  const handlePoundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.floor(Number(e.target.value)));
    e.target.value = Math.round(value).toString();
    setPounds(value);
  };

  const handleOuncesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.floor(Number(e.target.value)));
    e.target.value = Math.round(value).toString();
    setOunces(value);
  };

  return (
    <div className="weight-input">
      <h2>Baby's Weight</h2>
      <div className="scale">
        <label>
          Pounds:
          <input
            type="number"
            value={pounds}
            onChange={handlePoundsChange}
            min="0"
            step="1"
          />
        </label>
        <label>
          Ounces:
          <input
            type="number"
            value={ounces}
            onChange={handleOuncesChange}
            min="0"
            step="1"
          />
        </label>
      </div>
      <FormulaCalculator weight={{ pounds: pounds, ounces: ounces }} />
    </div>
  );
};

export default WeightInput;
