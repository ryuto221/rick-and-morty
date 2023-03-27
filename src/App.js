import "./App.css";
import { useEffect, useState } from "react";

const mock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/37",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41",
      "https://rickandmortyapi.com/api/episode/42",
      "https://rickandmortyapi.com/api/episode/43",
      "https://rickandmortyapi.com/api/episode/44",
      "https://rickandmortyapi.com/api/episode/45",
      "https://rickandmortyapi.com/api/episode/46",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/50",
      "https://rickandmortyapi.com/api/episode/51",
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
];

function App() {
  const [conteudo, setConteudo] = useState([<></>]);

  function traduzirStatus(status) {
    switch (status) {
      case "Alive":
        return "Vivo";
      case "Dead":
        return "Morto";
      case "unknown":
        return "Desconhecido";
        default:
          return status;
    }
  }

  function traduzirSpecies(species) {
    switch (species) {
      case "Human":
        return "Humano";
      case "Alien":
        return "Alien";
      case "Humanoid":
        return "Humanoide";
      case "Animal":
        return "Animal";
      case "Mythological Creature":
        return "Criatura Mítica";
      case "Poopybutthole":
        return "Poopybutthole";
      case "Disease":
        return "Doença";
      case "Robot":
        return "Robô";
      case "Cronenberg":
        return "Cronenberg";
      case "unknown":
        return "Desconhecido";
      default:
        return species;
    }
  }

  function traduzirGender(gender){
      switch (gender) {
      case "Male":
        return "Masculino";
      case "Female":
        return "Feminino";
      case "Genderless":
        return "Sem Gênero";
      case "unknown":
        return "Desconhecido";
      default:
        return gender;
    }
  }
  async function carregarTodosOsPersonagens() {
    const retorno = await fetch("https://rickandmortyapi.com/api/character", {
      method: "GET",
    }).then((response) => response.json());

    console.log(retorno);

    return retorno.results;
  }

  async function listaPersonagem() {
    const todosPersonagem = await carregarTodosOsPersonagens();

    return todosPersonagem.map(personagem => 
      <div className="card">
        <div className="card2">
          <img
            className="imagem"
            src={personagem.image}
            alt={personagem.name}
          />
          <h2>{personagem.name}</h2>
          <p>Gênero: {traduzirGender(personagem.gender)}</p>
          <p>Espécie: {traduzirSpecies(personagem.species)}</p>
          <p className="ListaSecundaria">
            <p><b>Participações:</b></p>
            {personagem.episode.map(ep => (
              <span key={personagem.name+(ep.split('episode/')[1])}>
                Ep-{(ep.split('episode/')[1])}  ,   
              </span>
            ))
          }
          </p>
          <p>Status: {traduzirStatus(personagem.status)}</p>
        </div>
      </div>
    )
  }

  useEffect(() => {
    async function carregar() {
      setConteudo(await listaPersonagem());
    }
    carregar();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Rick and Morty API</h3>
      </header>
      <div className="lista-principal">{conteudo}</div>
    </div>
  );
}

export default App;
