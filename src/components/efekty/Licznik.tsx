import React, { useEffect, useState } from "react";

function Licznik() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Hello world");
  });
  useEffect(() => {
    console.log(`Licznik zwiększył się do ${counter}`);
  }, [counter]);

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
