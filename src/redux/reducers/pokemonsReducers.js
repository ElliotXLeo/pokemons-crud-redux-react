import { CREATE_POKEMON, CREATE_POKEMON_SUCCESS } from "../types/indexTypes";

const initialState = {
  loading: false,
  pokemons: []
};

const pokemonsReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_POKEMON:
      return {
        ...state,
        loading: true
      };
    case CREATE_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemons: [...state.pokemons, payload]
      }
    default:
      return state;
  }
};

export default pokemonsReducers;