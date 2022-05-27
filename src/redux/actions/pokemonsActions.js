import { CREATE_POKEMON, CREATE_POKEMON_ERROR, CREATE_POKEMON_SUCCESS } from "../types/indexTypes";

const createPokemonAction = () => ({
  type: CREATE_POKEMON
});

const createPokemonSuccessAction = (pokemon) => ({
  type: CREATE_POKEMON_SUCCESS,
  payload: pokemon
});

const createPokemonErrorAction = (error) => ({
  type: CREATE_POKEMON_ERROR,
  payload: error
});

export const createPokemon = (pokemon) => {
  return (dispatch) => {
    dispatch(createPokemonAction());
    try {
      dispatch(createPokemonSuccessAction(pokemon));
    } catch (error) {
      console.log(error);
      createPokemonErrorAction(true);
    }
  };
};