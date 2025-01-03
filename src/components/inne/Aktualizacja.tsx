import React, { useState } from "react";

function Aktualizacja() {
  interface Produkt {
    nazwa: string;
    cena: number;
  }

  const [produkt, setProdukt] = useState<Produkt>({
    nazwa: "Pomidor",
    cena: 50,
  });

  return (
    <>
      <div>
        Aktualnie {produkt.nazwa} kosztuje {produkt.cena}
      </div>
      <button onClick={() => setProdukt({ ...produkt, cena: 100 })}>
        Zmień cenę
      </button>
    </>
  );
}

export default Aktualizacja;
