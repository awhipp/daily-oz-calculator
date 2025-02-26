import React from "react";
import Clock from "./components/Clock";
import WeightInput from "./components/WeightInput";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Clock />
      <WeightInput />
      <footer className="footer">
        <a href="https://github.com/awhipp/daily-oz-calculator" target="_blank" rel="noopener noreferrer">
            Github
        </a>
      </footer>
    </div>
  );
};

export default App;
