/* eslint-disable no-unused-vars */
import ListaPokedex from "./components/ListaPokedex";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <>
      <div className="logo">
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo Pokédex" />
      </div>
      <ListaPokedex />
      <Pokedex />
    </>
  );
}

export default App;
