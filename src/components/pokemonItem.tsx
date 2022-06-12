import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PokemonListItems } from "../content/pokemonListItem.interface";

export const PokemonItem = ({ url, name }: PokemonListItems) => {
  const navigate = useNavigate();

  function clickNav(): void {
    navigate(`/pokemon/${name}`);
  }

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
  `;
  const Box = styled.div`
    display: block;
    width: 250px;
    height: 250px;
    cursor: pointer;
  `;
  return (
    <Box onClick={clickNav}>
      {/* <img src={url} alt="pokemon" /> */}
      <Title>{name}</Title>
    </Box>
  );
};
