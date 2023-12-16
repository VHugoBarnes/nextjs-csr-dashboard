import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons/interfaces";

interface FavoritePokemonsState {
  favorites: { [key: string]: SimplePokemon }
};

// const getInitialState = (): FavoritePokemonsState => {
//   const favorites = JSON.parse(localStorage.getItem("favorite-pokemons") ?? "{}");

//   return favorites;
// };

const initialState: FavoritePokemonsState = {
  favorites: {},
  // "1": { id: "1", name: "bulbasaur" },
  // ...getInitialState()
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem("favorite-pokemons", JSON.stringify(state.favorites));
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;