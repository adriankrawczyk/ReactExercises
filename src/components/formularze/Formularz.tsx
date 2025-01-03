import React, { useState } from "react";

function Formularz() {
  const [text, setText] = useState<String | null>("");
  return (
    <>
      <input onChange={(e) => setText(e.target.value)} />
      <div>{text}</div>
    </>
  );
}

export default Formularz;
