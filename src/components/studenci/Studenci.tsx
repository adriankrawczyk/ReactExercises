import React from "react";

function Studenci() {
  interface Student {
    imie: String;
    nazwisko: String;
    rocznik: number;
  }
  const Students: Student[] = [
    { imie: "Adrian", nazwisko: "Krawczyk", rocznik: 2003 },
    { imie: "Piotr", nazwisko: "Błaszczyk", rocznik: 2002 },
    { imie: "Michał", nazwisko: "Kukiełka", rocznik: 2004 },
  ];
  return (
    <>
      <table>
        {Students.map(({ imie, nazwisko, rocznik }: Student) => {
          return (
            <tr key={`${imie} ${nazwisko} ${rocznik.toString()}`}>
              <td>{imie}</td>
              <td>{nazwisko}</td>
              <td>{rocznik}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Studenci;
