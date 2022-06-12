import { useState, useEffect } from "react";
import styled from "styled-components";
import { PokemonItem } from "../../components/pokemonItem";
import { PokemonListItems } from "../../content/pokemonListItem.interface";

export const Home = () => {
  const [list, setList] = useState<PokemonListItems[]>([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    (async function () {
      const fetchingData = await fetch(currentPage);
      const data = await fetchingData.json();
      setNextPage(data.next);
      setPrevPage(data.previous);
      setList(data.results);
    })();
  }, [currentPage]);

  console.log(list);
  function goNext() {
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  }
  function goPrev() {
    if (prevPage) {
      setCurrentPage(prevPage);
    }
  }
  const Pokemons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  `;
  return (
    <Pokemons>
      {list.length > 1 &&
        list.map((el, i) => (
          <PokemonItem key={i} name={el.name} url={el.url} />
        ))}
      <button onClick={goPrev}>prev</button>
      <button onClick={goNext}>next</button>
    </Pokemons>
  );
};
