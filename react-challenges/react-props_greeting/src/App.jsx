export default function App() {
  return (
    <p>
      <Greeting name="Klaus" />
    </p>
  );
}

function Greeting({ name }) {
  const coaches = ["Klaus", "Felix", "Roland"];
  return <p>Hello, {coaches.includes(name) ? "Coach!" : name};</p>;
}
