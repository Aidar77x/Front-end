import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  return (
    <div style={{ padding: 16, fontFamily: "Arial, sans-serif" }}>
      <h2>Counter</h2>
      <p style={{ fontSize: 22 }}>Value: {count}</p>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
}