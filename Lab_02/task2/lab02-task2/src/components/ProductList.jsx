import Card from "./Card";

export default function ProductList() {
  const products = [
    { id: 1, name: "Widget", price: 9.99 },
    { id: 2, name: "Gadget", price: 14.5 },
    { id: 3, name: "Thing", price: 4.25 },
  ];

  return (
    <>
      {products.map((p) => (
        <Card key={p.id} title={p.name}>
          <p>Price: {p.price}</p>
        </Card>
      ))}
    </>
  );
}