import {
  DELETE_POKEMON,
  DELETE_POKEMON_ERROR,
  DELETE_POKEMON_SUCCESS
} from "../types/pokemonsTypes";

const initialState = {
  loading: false,
  error: {},
  pokemon: {},
  pokemons: []
};

const pokemonsReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_POKEMON:
      return {
        ...state,
        loading: payload
      };
    case DELETE_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        pokemons: state.pokemons.filter(pokemon => pokemon._id !== payload)
      };
    case DELETE_POKEMON_ERROR:
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