"use client";
import { useAppSelector } from "@/store";
import React from "react";
import { PokemonCard } from "./PokemonCard";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector(state => state.pokemons);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {
        Object.values(pokemons).map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))
      }
    </div>
  );
};