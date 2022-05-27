import { CREATE_POKEMON, CREATE_POKEMON_SUCCESS } from "../types/indexTypes";

export const createPokemonAction = () => ({
  type: CREATE_POKEMON
});

export const createPokemonSuccessAction = (pokemon) => ({
  type: CREATE_POKEMON_SUCCESS,
  payload: pokemon
});