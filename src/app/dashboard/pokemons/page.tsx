import { PokemonCard } from "@/pokemons/PokemonCard";
import { PokemonResponse, SimplePokemon } from "@/pokemons/interfaces";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

const getPokemons = async (limit = 20, offset = 20): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then((res) => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

const page = async () => {
  const pokemons = await getPokemons(151);
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">
        Pokemons
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </div>
    </div>
  );
};

export default page;