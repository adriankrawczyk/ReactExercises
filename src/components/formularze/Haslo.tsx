import React, { useState } from "react";

function Haslo() {
  const [password, setPassword] = useState<String | null>("");
  const [repeatedPassword, setRepeatedPassword] = useState<String | null>("");
  const message = () => {
    if (password?.length === 0 || repeatedPassword?.length === 0)
      return "Prosze wprowadzić hasło";
    return password === repeatedPassword ? "" : "Hasła nie są zgodne";
  };
  return (
    <>
      <div>Hasło</div>
      <input onChange={(e) => setPassword(e.target.value)} />
      <div>Powtórz hasło</div>
      <input onChange={(e) => setRepeatedPassword(e.target.value)} />
      <div>{message()}</div>
    </>
  );
}

export default Haslo;
