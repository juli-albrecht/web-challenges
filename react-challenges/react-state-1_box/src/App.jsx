import "./styles.css";
import { useState } from "react";

export default function App() {
  const [activated, setActivated] = useState(false);

  function handleClick() {
    setActivated(!activated);
    // Check that the value changes correctly.
    console.log(activated);
  }

  return (
    <main>
      <div className={`box ${activated ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
