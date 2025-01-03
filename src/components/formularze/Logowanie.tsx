import React, { useState } from "react";

function Logowanie() {
  const [username, setUsername] = useState<String | null>("");
  const [password, setPassword] = useState<String | null>("");
  const [repeatedPassword, setRepeatedPassword] = useState<String | null>("");
  const Przycisk = () => {
    const empty =
      username?.length === 0 ||
      password?.length === 0 ||
      repeatedPassword?.length === 0;
    const alertMessage =
      password === repeatedPassword
        ? "Zalogowano poprawnie"
        : "Hasła nie są zgodne";
    return (
      <div>
        <button disabled={empty} onClick={() => alert(alertMessage)}>
          Zaloguj
        </button>
      </div>
    );
  };
  return (
    <>
      <div>Nazwa użytkownika</div>
      <input onChange={(e) => setUsername(e.target.value)} />
      <div>Hasło</div>
      <input onChange={(e) => setPassword(e.target.value)} />
      <div>Powtórz hasło</div>
      <input onChange={(e) => setRepeatedPassword(e.target.value)} />
      <Przycisk />
    </>
  );
}

export default Logowanie;
