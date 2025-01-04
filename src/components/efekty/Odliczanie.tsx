import React, { useState, useEffect } from "react";

function Odliczanie() {
  const [licznik, setLicznik] = useState<number>(1.5);
  const [counting, setCounting] = useState<boolean>(false);

  useEffect(() => {
    if (!counting) return;
    const interval = setInterval(() => {
      setLicznik((c) => Math.round((c - 0.1) * 10) / 10);
    }, 100);
    return () => clearInterval(interval);
  }, [counting]);

  useEffect(() => {
    if (licznik === 0) {
      setCounting(false);
    }
  }, [licznik]);

  return (
    <>
      <div>{licznik}</div>
      <button
        onClick={() => {
          setCounting(!counting);
        }}
        disabled={licznik === 0}
      >
        {licznik === 0 ? "ODLICZANIE ZAKOŃCZONE" : !counting ? "START" : "STOP"}
      </button>
    </>
  );
}

export default Odliczanie;
