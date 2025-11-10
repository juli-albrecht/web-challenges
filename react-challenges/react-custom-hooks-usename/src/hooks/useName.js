import { useState } from "react";

export default function useName() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const fullName = `${firstname} ${lastname}`;

  return [fullName, setFirstName, setLastName];
}
