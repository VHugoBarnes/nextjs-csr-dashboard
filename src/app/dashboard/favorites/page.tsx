import { FavoritePokemons } from "@/components/FavoritePokemons";
import React from "react";

const page = () => {
  return (
    <div className="space-y-8 p-2">
      <h1 className="text-4xl font-bold">
        Favorite Pokemons
      </h1>

      <FavoritePokemons />
    </div>
  );
};

export default page;