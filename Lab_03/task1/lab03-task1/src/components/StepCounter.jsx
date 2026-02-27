import { useState } from "react";

export default function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const applyChange = (delta) => {
    const newCount = count + delta;
    setCount(newCount);
    setHistory((prev) => [...prev, newCount]);
    setOperationCount((prev) => prev + 1);
  };

  const handleIncrement = () => applyChange(step);
  const handleDecrement = () => applyChange(-step);

  const handleReset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  const lastFive = history.slice(-5);

  return (
    <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8, marginBottom: 12 }}>
      <h3>StepCounter</h3>

      <p>
        Current count: <b>{count}</b>
      </p>
      <p>Total operations: {operationCount}</p>

      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <p style={{ marginBottom: 6 }}>Last 5 history values:</p>
      {lastFive.length === 0 ? (
        <p style={{ opacity: 0.7 }}>No history yet</p>
      ) : (
        <ul>
          {lastFive.map((v, idx) => (
            <li key={`${v}-${idx}`}>{v}</li>
          ))}
        </ul>
      )}

      <p style={{ opacity: 0.7 }}>
        Props: initialValue={initialValue}, step={step}
      </p>
    </div>
  );
}