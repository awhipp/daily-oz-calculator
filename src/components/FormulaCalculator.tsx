import React, { useState, useEffect } from "react";
import "../styles/FormulaCalculator.css";

interface FormulaCalculatorProps {
  weight: { pounds: number; ounces: number };
}

const getHours = () => {
  const date = new Date();
  return Math.round((date.getHours() + date.getMinutes() / 60) * 1000) / 1000;
};

const getCalcString = (ounces: number, pounds: number, currentHour: number) => {
  if (pounds <= 0) {
    return "Ounces = ((Weight * 2.5)/24) * current_hour";
  }

  return `${ounces.toFixed(2)} = ((${pounds} * 2.5)/24) * ${currentHour}`;
};

const FormulaCalculator: React.FC<FormulaCalculatorProps> = ({ weight }) => {
  const [currentHour, setCurrentHour] = useState(() => {
    return getHours();
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(getHours());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const pounds = weight.pounds + weight.ounces / 16;
  const ounces = pounds > 0 ? ((2.5 * pounds) / 24) * currentHour : 0;
  return (
    <div>
      <h2> Ounces of Food </h2>
      <sub> <a 
      target="_blank" 
      href="https://www.healthline.com/health/parenting/how-many-ounces-do-newborns-need-to-eat">
      ((Weight * 2.5)/24) * current_hour
      </a> </sub>
      <h3 title={getCalcString(ounces, pounds, currentHour)}>
        {ounces.toFixed(2)} oz
      </h3>
    </div>
  );
};

export default FormulaCalculator;
