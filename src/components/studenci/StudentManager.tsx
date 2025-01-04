import React, { useState } from "react";
import Dodawanie from "./Dodawanie.tsx";
import Student from "./Student.tsx";

function StudentManager() {
  const [students, setStudents] = useState<Array<Student>>([
    { imie: "Adrian", nazwisko: "Krawczyk", rocznik: 2003 },
    { imie: "Piotr", nazwisko: "Błaszczyk", rocznik: 2002 },
    { imie: "Michał", nazwisko: "Kukiełka", rocznik: 2004 },
  ]);

  return (
    <>
      <table>
        {students.map(({ imie, nazwisko, rocznik }: Student) => {
          return (
            <tr key={`${imie} ${nazwisko} ${rocznik.toString()}`}>
              <td>{imie}</td>
              <td>{nazwisko}</td>
              <td>{rocznik}</td>
            </tr>
          );
        })}
      </table>
      <Dodawanie students={students} setStudents={setStudents} />
    </>
  );
}

export default StudentManager;
