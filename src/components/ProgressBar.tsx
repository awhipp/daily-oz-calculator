import React from 'react';
import '../styles/ProgressBar.css';

interface ProgressBarProps {
  value: number;
  max: number;
  current: number;
  total: number;
  remaining: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, current, total }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress-bar__fill" style={{ width: `${percentage}%` }}>
          <span className="progress-bar__text">{current.toFixed(2)} oz ({percentage.toFixed(2)}%)</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;