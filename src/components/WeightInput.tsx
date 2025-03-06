import React, { useState, useEffect } from "react";
import FormulaCalculator from "./FormulaCalculator";
import "../styles/WeightInput.css";

const getInitialPounds = () => {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("pounds")) || 0;
  };
  
  const getInitialOunces = () => {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("ounces")) || 0;
  };
  
  const WeightInput: React.FC = () => {
    const [pounds, setPounds] = useState<number>(getInitialPounds());
    const [ounces, setOunces] = useState<number>(getInitialOunces());
  

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialPounds = Number(params.get("pounds")) || 0;
    const initialOunces = Number(params.get("ounces")) || 0;
    setPounds(initialPounds);
    setOunces(initialOunces);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("pounds", pounds.toString());
    params.set("ounces", ounces.toString());
    window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
  }, [pounds, ounces]);


  const handlePoundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.floor(Number(e.target.value)));
    e.target.value = Math.round(value).toString();
    setPounds(value);
  };

  const handleOuncesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Round to the nearest hundredth
    const value = Math.max(0, Math.min(15.99, Math.round(Number(e.target.value) * 100) / 100));
    e.target.value = value.toString();
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
            step="0.1"
            max="15.99"
          />
        </label>
      </div>
      <FormulaCalculator weight={{ pounds: pounds, ounces: ounces }} />
    </div>
  );
};

export default WeightInput;
