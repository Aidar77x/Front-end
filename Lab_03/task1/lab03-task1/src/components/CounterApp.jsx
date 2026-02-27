import StepCounter from "./StepCounter";


export default function CounterApp() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 16 }}>
      <h2>CounterApp</h2>

      <h4>Counter A (initialValue=0, step=1)</h4>
      <StepCounter initialValue={0} step={1} />

      <h4>Counter B (initialValue=10, step=5)</h4>
      <StepCounter initialValue={10} step={5} />
    </div>
  );
}