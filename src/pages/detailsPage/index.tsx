import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PokemonDetails } from "../../content/pokemonDetails.interface";

export const Details = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState<PokemonDetails>();

  useEffect(() => {
    (async function () {
      const fetchingData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const data = await fetchingData.json();
      setSelectedItem(data);
    })();
  }, [id]);

  console.log(selectedItem);
  const Text = styled.p`
    margin-top: 10px;
    padding-right: 20px;

  `;
  const FlexBox = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
  `;
  return (
    <div>
      {selectedItem && (
        <FlexBox>
          <div>
            <img alt="pokemon" src={selectedItem.species.url} />
            <h2>{selectedItem.species.name}</h2>
          </div>
          <div>
            <Text>
              <h3>the Stats are</h3> {JSON.stringify(selectedItem.stats)}
            </Text>
            <Text>
              <h3>the Types are</h3> {JSON.stringify(selectedItem.types)}
            </Text>
            <Text>
              <h3>the Weight is </h3> {selectedItem.weight}
            </Text>
            <Text>
              <h3>the moves are</h3> {JSON.stringify(selectedItem.moves)}
            </Text>
          </div>
        </FlexBox>
      )}
    </div>
  );
};
