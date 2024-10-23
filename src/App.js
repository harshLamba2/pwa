import React, { useState } from 'react';
import './App.css'; // Importing the CSS file for styles

const App = () => {
  const [number, setNumber] = useState(0);

  const handleAdd = () => {
    setNumber(number + 1);
  };

  const handleSubtract = () => {
    setNumber(number - 1);
  };

  return (
    <div className="number-manipulator-container">
      <h1>Number Manipulator</h1>
      <h2 className="number-display">{number}</h2>
      <div className="button-group">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
      </div>
    </div>
  );
};

export default App;
