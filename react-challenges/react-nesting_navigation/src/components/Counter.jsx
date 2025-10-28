import { useState } from "react";

export function Counter() {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          console.log(number);
          setNumber(number + 1);
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          console.log(number);
          setNumber(number - 1);
        }}
      >
        Minus
      </button>
      <p>{number}</p>
    </div>
  );
}

export function NameDisplay() {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <div>{name.length}</div>
    </div>
  );
}
