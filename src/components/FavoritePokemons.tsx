"use client";
import { useAppSelector } from "@/store";
import React from "react";
import { PokemonCard } from "./PokemonCard";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(state => Object.values(state.pokemons));

  const [pokemons, setPokemons] = React.useState(favoritePokemons);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {
        pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))
      }
    </div>
  );
};