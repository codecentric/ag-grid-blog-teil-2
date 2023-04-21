import React from "react";
import "./App.css";
import BarChart from "./charts/barChart";
import PieChart from "./charts/pieChart";
import LineChart from "./charts/lineChart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarChart />
        <PieChart />
        <LineChart />
      </header>
    </div>
  );
}

export default App;
