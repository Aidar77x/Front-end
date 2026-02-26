import { useState } from "react";
import "./App.css";

export default function App() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleToggle = () => {
    setIsHighlighted((prev) => !prev);
  };

  return (
    <div className="page">
      <h1>React: Declarative Toggle</h1>

      <button onClick={handleToggle}>Toggle Highlight</button>

      <p className={isHighlighted ? "highlight" : ""}>
        This paragraph will be highlighted when you click the button.
      </p>
    </div>
  );
}
