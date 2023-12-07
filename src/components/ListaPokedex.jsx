/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ListaPokedex = ({ tipos, setTipoFiltrado }) => {
  const botonesTipos =
    tipos &&
    tipos.map((tipo) => (
      <button key={tipo} onClick={() => setTipoFiltrado(tipo)} className={`btn btn-header ${tipo}`} id={tipo}>
        {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
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
