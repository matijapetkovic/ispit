import React, { useState, useEffect } from "react";
import "./App.css";
import Forma from "./components/Forma";
import KorisnickiPodaci from "./components/KorisnickiPodaci";

function App() {
  const [ime, setIme] = useState("");
  const [podaci, setPodaci] = useState(null);

  const onSendInput = (input) => {
    setIme(input);
  };

  useEffect(() => {
    const fetchPodaci = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${ime}`);
        if (response.ok) {
          const data = await response.json();
          setPodaci(data);
        } else {
          setPodaci(null);
          alert("Korisnik ne postoji.");
        }
      } catch (error) {
        console.log(error);
        setPodaci(null);
        alert("Došlo je do pogreške prilikom dohvaćanja podataka.");
      }
    };

    if (ime) {
      fetchPodaci();
    }
  }, [ime]);

  return (
    <div className="App">
      <Forma onSendInput={onSendInput} />
      {podaci && <KorisnickiPodaci podaci={podaci} />}
    </div>
  );
}

export default App;
