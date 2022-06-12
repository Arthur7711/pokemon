import { useState, useEffect } from "react";
import { PokemonItem } from "../../components/pokemonItem";

export const Home = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async function () {
      const fetchingData = await fetch(`https://pokeapi.co/api/v2/pokemon`);
      const data = await fetchingData.json();
      setList(data);
    })();
  }, []);
  console.log(list);
  return (
    <div>
      <PokemonItem title="hello" imageHref="" />
    </div>
  );
};
