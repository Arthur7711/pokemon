import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PokemonListItems } from "../content/pokemonListItem.interface";
import { useEffect, useState } from "react";

export const PokemonItem = ({ url, name }: PokemonListItems) => {
  const [imgHref, setImgHref] = useState("");
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((res) => {
        setImgHref(res.sprites.front_default);
      });
  });
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
  const ImgBox = styled.div`
    width: 200px;
    height: 200px;
  `;
  return (
    <Box onClick={clickNav}>
      <ImgBox>
        <img width="100%" src={imgHref} alt="pokemon" />
      </ImgBox>
      <Title>{name}</Title>
    </Box>
  );
};
