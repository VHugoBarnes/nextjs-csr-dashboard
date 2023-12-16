"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { setFavoritePokemons } from "./pokemon/pokemons";

interface Props {
  children: React.ReactNode
};

export const Providers = ({ children }: Props) => {
  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");

    store.dispatch(setFavoritePokemons(favorites));
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};