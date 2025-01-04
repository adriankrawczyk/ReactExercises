import React, { useState } from "react";
import Student from "./Student.tsx";

function Dodawanie({ students, setStudents }) {
  const [imie, setImie] = useState<String | null>("");
  const [nazwisko, setNazwisko] = useState<String | null>("");
  const [rocznik, setRocznik] = useState<number>(0);
  const add = () => {
    if (imie?.length === 0 || nazwisko?.length === 0) return;
    setStudents([...students, { imie, nazwisko, rocznik } as Student]);
  };
  return (
    <>
      <div>Imie</div>
      <input onChange={(e) => setImie(e.target.value)} />
      <div>Nazwisko</div>
      <input onChange={(e) => setNazwisko(e.target.value)} />
      <div>Rocznik</div>
      <input
        value={rocznik}
        onChange={(e) => {
          setRocznik(parseInt(e.target.value) || 0);
        }}
      />
      <br />
      <button onClick={add}>Dodaj</button>
    </>
  );
}

export default Dodawanie;
