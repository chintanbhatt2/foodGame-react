import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-header">
      <h1 className="app-title">Food Game</h1>
      <InitialScreen />
    </div>
  );
}

class InitialScreen extends React.Component {
  render() {
    return (
      <div className="initial-screen">
        <p>
          Player amount:
          <input
            type="number"
            className="firstBox playerAmount"
            name="quantity"
            min="2"
            max="10"
          />
        </p>
        <p>
          Choices per player:
          <input
            type="number"
            className="firstBox choicesPer"
            name="quantity"
            min="1"
            max="3"
          />
        </p>
        <button className="firstBtn" onclick={InitialSubmit}>
          SUBMIT
        </button>
      </div>
    );
  }
}

function InitialSubmit() {
  alert("AHHHHHH");
}

export default App;
