export interface PokemonDetails {
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