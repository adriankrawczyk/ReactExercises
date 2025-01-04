import React, { useEffect, useState } from "react";

function Tytul() {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    document.title = title;
  }, [title]);

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <input onChange={onChange} />
    </>
  );
}

export default Tytul;
