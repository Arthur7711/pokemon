import { useState } from "react";

export const Searching = () => {
  const [pokemonName, setPokemonName] = useState("ditto");
  const [chosen, setChosen] = useState(false);
  const [pokemonData, setPokemonData] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const searchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemonData({
          name: pokemonName,
          species: res.species.name,
          img: res.sprites.front_default,
          hp: res.stats[0].base_stat,
          attack: res.stats[1].base_stat,
          defense: res.stats[3].base_stat,
          type: res.types[0].type.name,
        });
        setChosen(true);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="please write name"
        onChange={(e) => {
          setPokemonName(e.target.value);
        }}
      />
      <button
        onClick={searchPokemon}
      >
        Search Pokemon
      </button>

      <div>
        {!chosen ? (
          <h1>Please choose a pokemon</h1>
        ) : (
          <>
            <h1>{pokemonData.name}</h1>
            <img src={pokemonData.img} alt={pokemonData.name} />
            <h2>{pokemonData.species}</h2>
            <h2>{pokemonData.type}</h2>
            <h2>{pokemonData.hp}</h2>
            <h2>{pokemonData.attack}</h2>
            <h2>{pokemonData.defense}</h2>
          </>
        )}
      </div>
    </div>
  );
};
