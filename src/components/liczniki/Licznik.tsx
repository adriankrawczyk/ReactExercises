import React, { useState } from "react";

function Licznik() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Zwiększ
      </button>
    </>
  );
}

export default Licznik;
