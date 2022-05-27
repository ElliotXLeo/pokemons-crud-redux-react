import { CREATE_POKEMON } from "../types/indexTypes";

export const createPokemonAction = (pokemon) => ({
  type: CREATE_POKEMON,
  payload: pokemon
});