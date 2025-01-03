import React, { useState } from "react";
import Przycisk from "./Przycisk.tsx";

function NowyLicznik() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>{counter}</div>
      <Przycisk setCounter={setCounter} />
    </>
  );
}

export default NowyLicznik;
