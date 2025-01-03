import React from "react";

function Przycisk({ setCounter }) {
  return (
    <>
      <button
        onClick={() => {
          setCounter((c: number) => c + 1);
        }}
      >
        Zwiększ
      </button>
    </>
  );
}

export default Przycisk;
