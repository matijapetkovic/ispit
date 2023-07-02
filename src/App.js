import React, { useState, useEffect } from "react";
import "./App.css";
import Forma from "./components/Forma";
import KorisnickiPodaci from "./components/KorisnickiPodaci";
import { fetchRepoList } from "./components/KorisnickiPodaci";

function App() {
  const [ime, setIme] = useState("");
  const [podaci, setPodaci] = useState(null);
  const [repoList, setRepoList] = useState([]);

  const onSendInput = (input) => {
    setIme(input);
  };

  const reset = () => {
    setIme("");
    setPodaci(null);
    setRepoList([]);
  };

  useEffect(() => {
    const fetchPodaci = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${ime}`);
        if (response.ok) {
          const data = await response.json();
          setPodaci(data);
          if (data.repos_url) {
            fetchRepoList(data.repos_url, setRepoList);
          }
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
      {podaci && <KorisnickiPodaci podaci={podaci} repoList={repoList} />}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
