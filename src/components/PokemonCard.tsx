import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../pokemons/interfaces";
import { FaRegHeart } from "react-icons/fa";

export const PokemonCard = ({ pokemon }: { pokemon: SimplePokemon }) => {
  return (
    <div key={pokemon.id} className="flex flex-col bg-neutral-800 w-40 justify-center items-center rounded-lg space-y-4">
      <Image
        alt={pokemon.name}
        width={80}
        height={80}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        className="w-20 h-20 px-4 pt-6"
        priority={false}
      />
      <p className="capitalize font-bold text-center text-neutral-200 px-4">
        {pokemon.name}
      </p>
      <Link href={`/dashboard/pokemon/${pokemon.id}`} className="border border-white text-white rounded-full px-3 text-sm hover:scale-105 transition-all duration-200">
        More info
      </Link>
      <div className="bg-white w-full flex justify-center items-center py-2 rounded-b-lg">
        <FaRegHeart className="text-pink-500 w-5 h-5" />
      </div>
    </div>
  );
};