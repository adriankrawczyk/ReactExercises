import React from "react";
import Produkt from "./Produkt.tsx";

function NowyKoszyk() {
  const Produkty = ["Jabłko", "Banan", "Gruszka", "Porzeczka", "Mango"];
  return (
    <>
      {Produkty.map((el) => {
        return <Produkt nazwa={el} />;
      })}
    </>
  );
}

export default NowyKoszyk;
