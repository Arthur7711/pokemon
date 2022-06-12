import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface PakemonDetails {
  species: { name: string; url: string };
  stats: [
    {
      base_stat: number;
      stat: { name: string; url: string };
    }
  ];
  types: [{ type: { name: string; url: string } }];
  weight: number;
  moves: [
    {
      move: [{ name: string; url: string }];
      version_group_details: [
        {
          move_learn_method: { name: string; url: string };
          version_group: { name: string; url: string };
        }
      ];
    }
  ];
}

export const Details = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState<PakemonDetails>();

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
