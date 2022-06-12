import styled from "styled-components";

type PokemonItemData = {
  imageHref: string;
  title: string;
};

export const PokemonItem = ({ imageHref, title }: PokemonItemData) => {
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
      <img src={imageHref} alt="pokemon" />
      <Title>{title}</Title>
    </Box>
  );
};
