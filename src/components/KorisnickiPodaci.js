import React from "react";

const KorisnickiPodaci = ({ podaci, repoList }) => {
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

      <h3>Repozitoriji:</h3>
      <ul>
        {repoList.map((repo) => (
          <li style={{ listStyleType: "none" }} key={repo.id}>
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const fetchRepoList = async (reposUrl, setRepoList) => {
  try {
    const response = await fetch(reposUrl);
    const data = await response.json();
    setRepoList(data);
  } catch (error) {
    console.log(error);
  }
};

export default KorisnickiPodaci;
