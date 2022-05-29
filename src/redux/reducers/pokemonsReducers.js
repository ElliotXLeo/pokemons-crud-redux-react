import { CREATE_POKEMON, CREATE_POKEMON_ERROR, CREATE_POKEMON_SUCCESS, READ_POKEMONS, READ_POKEMONS_ERROR, READ_POKEMONS_SUCCESS } from "../types/indexTypes";

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
      };
    case CREATE_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case READ_POKEMONS:
      return {
        ...state,
        loading: true
      };
    case READ_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        pokemons: payload
      };
    case READ_POKEMONS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default pokemonsReducers;