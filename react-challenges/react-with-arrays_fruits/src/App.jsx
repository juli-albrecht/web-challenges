import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍒 Cherry",
      color: "red",
    },
    {
      id: 1339,
      name: "🍇 Grape",
      color: "violet",
    },
    {
      id: 1340,
      name: "🫐 Blueberry",
      color: "blue",
    },
    {
      id: 1341,
      name: "🍊 Orange",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} backgroundColor={color} />
      ))}
    </div>
  );
}
