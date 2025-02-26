import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
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
  const suggestedOunces = pounds > 0 ? ((2.5 * pounds) / 24) * currentHour : 0;
  const totalOunces = pounds * 2.5;
  return (
    <div>
        {/* If pounds > 0 then show the formula */}
        {pounds > 0 && (
      <div>
        <br></br>
        <hr></hr>
        <h2> 
          <em>
            <a 
              target="_blank" 
              href="https://www.healthline.com/health/parenting/how-many-ounces-do-newborns-need-to-eat">
                Suggested Intake
            </a>  
          </em>
        </h2>
        <sub>  </sub>

        <ProgressBar
          value={suggestedOunces}
          max={totalOunces}
          current={suggestedOunces}
          total={totalOunces}
          remaining={totalOunces - suggestedOunces}
        />
        <p title={getCalcString(suggestedOunces, pounds, currentHour)}>
          By Now: {suggestedOunces.toFixed(2)} oz <br></br>
          Daily: {totalOunces.toFixed(2)} oz <br></br>
          Remaining: {(totalOunces - suggestedOunces).toFixed(2)} oz
        </p>
      </div>
            )}
    </div>
  );
};

export default FormulaCalculator;
