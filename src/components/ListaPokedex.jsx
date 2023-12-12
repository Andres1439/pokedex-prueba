/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const tipos = [
  "ver-todos",
  "normal",
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dark",
  "dragon",
  "steel",
  "fairy",
];

const ListaPokedex = ({ setTipoFiltrado }) => {
  const botonesTipos =
    tipos && // validar que tipos existe y tiene un valor diferente al "null" o "undefined"
    tipos.map((tipo) => (
      <button key={tipo} onClick={() => setTipoFiltrado(tipo)} className={`btn btn-header ${tipo}`} id={tipo}>
        {tipo}
      </button>
    ));

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">{botonesTipos}</li>
      </ul>
    </nav>
  );
};
export default ListaPokedex;
