import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Hi</Button>
      <Button>Next Button</Button>
      <Button>Third Button</Button>
      <Button>Last Button</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
