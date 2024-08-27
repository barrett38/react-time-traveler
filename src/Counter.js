import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    const newHistory = history.slice(0, currentStep + 1);
    setCount(newCount);
    setHistory([...newHistory, newCount]);
    setCurrentStep((newStep) => newStep + 1);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    const newHistory = history.slice(0, currentStep + 1);
    setCount(newCount);
    setHistory([...newHistory, newCount]);
    setCurrentStep((newStep) => newStep + 1);
  };

  const travelToStep = (step) => {
    setCount(history[step]);
    setCurrentStep(step);
  };

  return (
    <div>
      <h1>React Time Traveler</h1>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h2>Travel through time:</h2>
      <ul>
        {history.map((value, index) => (
          <li key={index}>
            <button onClick={() => travelToStep(index)}>
              Go to step {index} (Count: {value})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
