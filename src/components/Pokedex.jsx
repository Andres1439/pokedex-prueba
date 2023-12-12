/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ListaPokedex from "./ListaPokedex";

const Pokedex = () => {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");
  const [tipoFiltrado, setTipoFiltrado] = useState("ver-todos"); // Tipo que el usuario elige activamente
  const [filteredData, setFilteredData] = useState([]); // Pokemones filtrados que se eligio
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 51;

  // Carga de datos ----------------------------------------------------
  useEffect(() => {
    const fetchPromises = [];

    for (let i = 1; i <= 1017; i++) {
      fetchPromises.push(fetch(URL + i).then((response) => response.json()));
    }

    Promise.all(fetchPromises)
      .then((pokemonDataArray) => {
        setPokemonData(pokemonDataArray);
        setFilteredData(pokemonDataArray);
      })
      .catch((error) => {
        console.error("Error al cargar los datos de los pokemons:", error);
      });
  }, []);

  // Filtrar pokemones ------------------------------------------------
  const tieneTipo = (pokemon, tipoFiltrado) => {
    const tipos = pokemon.types.map((type) => type.type.name); //Esto crea un array con los dos tipos de los pokemon

    return tipos.some((tipo) => tipo.includes(tipoFiltrado)); //Retoran un true o false, segun el tipo que contenga
  };

  useEffect(() => {
    // Filtrar los pokémons según el tipo seleccionado
    const pokemonesFiltrados = pokemonData.filter(
      (pokemon) => tipoFiltrado === "ver-todos" || tieneTipo(pokemon, tipoFiltrado) //Dependiendo de lo que se cumpla, se va a mandar el pokemon al array de pokemones filtrados
    );

    // Actualizar el estado con los pokémons filtrados
    setFilteredData(pokemonesFiltrados);
  }, [tipoFiltrado, pokemonData]);

  // Validar la búsqueda ------------------------------------------------
  const results = search // Valida si es truthy o falsy
    ? filteredData.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()))
    : filteredData;

  // Calcular índices de inicio y fin para la paginación ----------------

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = results.slice(startIndex, endIndex);

  // Total de páginas
  const totalPages = Math.ceil(results.length / itemsPerPage);

  // Cambiar de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Mostrar los pokemones -----------------------------------------------
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

  // Estructura
  return (
    <div>
      <ListaPokedex setTipoFiltrado={setTipoFiltrado} />
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Buscar Pokémon"
          className="form-control buscador"
        />
      </div>
      <main>
        <div id="todos">
          <div className="pokemon-todos" id="listaPokemon">
            {visibleData.map((data) => mostrarPokemon(data))}
          </div>
        </div>
        {/* Botones de paginación */}
        <div>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button key={page} onClick={() => handlePageChange(page)} className={page === currentPage ? "active" : ""}>
              {page}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pokedex;
