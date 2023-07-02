import React from "react";

const KorisnickiPodaci = ({ podaci }) => {
  const { avatar_url, name, location, bio } = podaci;

  return (
    <div>
      <img src={avatar_url} alt="Profilna slika" />
      <h2>{name ? name : "Nema podatak, profil nedovoljno uređan"}</h2>
      <p>
        Lokacija:{" "}
        {location ? location : "Nema podatak, profil nedovoljno uređan"}
      </p>
      <p>Opis: {bio ? bio : "Nema podatak, profil nedovoljno uređan"}</p>
    </div>
  );
};

export default KorisnickiPodaci;
