import Card from "./components/Card";
import ProductList from "./components/ProductList";
import Section from "./components/Section";

export default function App() {
  return (
    <>
      <h1>Lab 2.2</h1>

      <Card title={"About"}>
        <p>Бұл Card компоненті children арқылы мәтін қабылдайды.</p>
      </Card>

      <Card title={"Info"} className={"wide"}>
        <p>Екінші Card — басқа title және className.</p>
      </Card>

      <Section title={"Products"}>
        <ProductList />
      </Section>
    </>
  );
}