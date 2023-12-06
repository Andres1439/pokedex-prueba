/* eslint-disable no-unused-vars */
import React from "react";

const ListaPokedex = () => {
  return (
    <div>
      <header>
        <nav className="nav">
          <img
            className="logo"
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="Logo Pokédex"
          />
          <ul className="nav-list">
            {" "}
            <li className="nav-item">
              <button className="btn btn-header" id="ver-todos">
                Ver todos
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header normal" id="normal">
                Normal
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header fire" id="fire">
                Fire
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header water" id="water">
                Water
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header grass" id="grass">
                Grass
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header electric" id="electric">
                Electric
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header ice" id="ice">
                Ice
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header fighting" id="fighting">
                Fighting
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header poison" id="poison">
                Poison
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header ground" id="ground">
                Ground
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header flying" id="flying">
                Flying
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header psychic" id="psychic">
                Psychic
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header bug" id="bug">
                Bug
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header rock" id="rock">
                Rock
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header ghost" id="ghost">
                Ghost
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header dark" id="dark">
                Dark
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header dragon" id="dragon">
                Dragon
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header steel" id="steel">
                Steel
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-header fairy" id="fairy">
                Fairy
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main></main>
    </div>
  );
};

export default ListaPokedex;
