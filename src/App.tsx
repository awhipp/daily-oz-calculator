import React from "react";
import Clock from "./components/Clock";
import WeightInput from "./components/WeightInput";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Clock />
      <WeightInput />
    </div>
  );
};

export default App;
