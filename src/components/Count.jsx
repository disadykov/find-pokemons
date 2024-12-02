import React, { useMemo } from 'react';

export default function CountPokemon({ pokemons }) {

  const countPokemons = useMemo(() => {
    return pokemons.length;
  });

  return (

    console.log(countPokemons)

  );
}
