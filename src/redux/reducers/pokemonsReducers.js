import { CREATE_POKEMON, CREATE_POKEMON_ERROR, CREATE_POKEMON_SUCCESS } from "../types/indexTypes";

const initialState = {
  loading: false,
  error: {},
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
        error: {},
        pokemons: [...state.pokemons, payload]
      }
    case CREATE_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state;
  }
};

export default pokemonsReducers;