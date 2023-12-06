/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Pokedex = () => {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPromises = [];

    for (let i = 1; i <= 151; i++) {
      fetchPromises.push(fetch(URL + i).then((response) => response.json()));
    }

    Promise.all(fetchPromises)
      .then((pokemonDataArray) => {
        setPokemonData(pokemonDataArray);
      })
      .catch((error) => {
        console.error("Error al cargar los datos de los pokemons:", error);
      });
  }, []);

  const mostrarPokemon = (poke) => {
    let tipos = poke.types.map((type) => (
      <p key={type.type.name} className={`${type.type.name} tipo`}>
        {type.type.name}
      </p>
    ));

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
      pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
      pokeId = "0" + pokeId;
    }

    return (
      <div key={poke.id} className="pokemon">
        <p className="pokemon-id-back">#{pokeId}</p>
        <div className="pokemon-imagen">
          <img src={poke.sprites.other["official-artwork"].front_default} alt={poke.name} />
        </div>
        <div className="pokemon-info">
          <div className="nombre-contenedor">
            <p className="pokemon-id">#{pokeId}</p>
            <h2 className="pokemon-nombre">{poke.name}</h2>
          </div>
          <div className="pokemon-tipos">{tipos}</div>
          <div className="pokemon-stats">
            <p className="stat">{poke.weight}kg</p>
            <p className="stat">{poke.abilities[0].ability.name}</p>
          </div>
        </div>
      </div>
    );
  };

  const handleButtonClick = (buttonId) => {
    let filteredData = [];

    if (buttonId === "ver-todos") {
      filteredData = pokemonData;
    } else {
      filteredData = pokemonData.filter((data) => data.types.some((type) => type.type.name.includes(buttonId)));
    }

    setPokemonData(filteredData);
  };

  const results = !search
    ? pokemonData
    : pokemonData.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search"
          className="form-control buscador"
        />
      </div>
      <main>
        <div id="todos">
          <div className="pokemon-todos" id="listaPokemon">
            {results.map((data) => mostrarPokemon(data))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pokedex;
