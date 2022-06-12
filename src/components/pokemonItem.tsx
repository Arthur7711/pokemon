type PokemonItemData = {
  imageHref: string;
  title: string;
};
export const PokemonItem = ({ imageHref, title }: PokemonItemData) => {
  return (
    <div>
      <img src={imageHref} alt="pokemon" />
      <h3>{title}</h3>
    </div>
  );
};
