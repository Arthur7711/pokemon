import styled from "styled-components";
import { PokemonListItems } from "../content/pokemonListItem.interface";

export const PokemonItem = ({ url, name }: PokemonListItems) => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
  `;
  const Box = styled.div`
    display: block;
    width: 250px;
    height: 250px;
  `;
  return (
    <Box>
      {/* <img src={url} alt="pokemon" /> */}
      <Title>{name}</Title>
    </Box>
  );
};
