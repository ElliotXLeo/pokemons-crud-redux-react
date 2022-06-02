import {
  DELETE_POKEMON,
  DELETE_POKEMON_ERROR,
  DELETE_POKEMON_SUCCESS,
  READ_POKEMON,
  READ_POKEMON_ERROR,
  READ_POKEMON_SUCCESS,
  UPDATE_POKEMON,
  UPDATE_POKEMON_ERROR,
  UPDATE_POKEMON_SUCCESS
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
    case READ_POKEMON:
      return {
        ...state,
        loading: payload
      };
    case READ_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        pokemon: payload
      };
    case READ_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case UPDATE_POKEMON:
      return {
        ...state,
        loading: payload
      };
    case UPDATE_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {},
        pokemon: {},
        pokemons: state.pokemons.map((pokemon) => pokemon._id === payload._id ? payload : pokemon)
      };
    case UPDATE_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
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