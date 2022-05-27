import { CREATE_POKEMON, CREATE_POKEMON_SUCCESS } from "../types/indexTypes";

const createPokemonAction = () => ({
  type: CREATE_POKEMON
});

const createPokemonSuccessAction = (pokemon) => ({
  type: CREATE_POKEMON_SUCCESS,
  payload: pokemon
});

export const createPokemon = (pokemon) => {
  return (dispatch) => {
    dispatch(createPokemonAction());
    try {
      dispatch(createPokemonSuccessAction(pokemon));
    } catch (error) {
      console.log(error);
    }
  };
};