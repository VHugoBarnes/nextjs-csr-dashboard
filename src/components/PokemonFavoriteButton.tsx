"use client";
import { SimplePokemon } from "@/pokemons/interfaces";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemon/pokemons";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const PokemonFavoriteButton = ({ pokemon }: { pokemon: SimplePokemon }) => {
  const isFavorite = useAppSelector(state => !!state.pokemons.favorites[pokemon.id]);
  const dispatch = useAppDispatch();
  const [hover, setHover] = React.useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleDeHover = () => {
    setHover(false);
  };

  const handleFavorite = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div onMouseOver={handleHover} onMouseOut={handleDeHover} onClick={handleFavorite}>
      {
        isFavorite
          ? (
            hover === false
              ? (<FaHeart className="text-pink-500 w-5 h-5 cursor-pointer" />)
              : (<FaRegHeart className="text-pink-500 w-5 h-5 cursor-pointer" />)
          )
          : (
            hover === false
              ? (<FaRegHeart className="text-pink-500 w-5 h-5 cursor-pointer" />)
              : (<FaHeart className="text-pink-500 w-5 h-5 cursor-pointer" />)
          )
      }
    </div>
  );
};