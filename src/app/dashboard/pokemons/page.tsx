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

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className="flex flex-col bg-neutral-800 w-40 justify-center items-center rounded-lg space-y-4">
              <Image
                alt={pokemon.name}
                width={80}
                height={80}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                className="w-20 h-20 px-4 pt-6"
              />
              <p className="capitalize font-bold text-center text-neutral-200 px-4">
                {pokemon.name}
              </p>
              <Link href={`/dashboard/pokemons/${pokemon.id}`} className="border border-white text-white rounded-full px-3 text-sm hover:scale-105 transition-all duration-200">
                More info
              </Link>
              <div className="bg-white w-full flex justify-center items-center py-2 rounded-b-lg">
                <FaRegHeart className="text-pink-500 w-5 h-5" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default page;