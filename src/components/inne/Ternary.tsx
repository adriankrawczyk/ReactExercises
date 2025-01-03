import React, { useState } from "react";

function Ternary() {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);

  return (
    <>
      <div>Stwierdzenie a jest {a ? "prawdziwe" : "fałszywe"}</div>
      <div>Stwierdzenie b jest {b ? "prawdziwe" : "fałszywe"}</div>
    </>
  );
}

export default Ternary;
