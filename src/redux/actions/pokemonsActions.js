import axiosInstance from "../../config/axiosInstance";
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
  return (async (dispatch) => {
    dispatch(createPokemonAction());
    try {
      const form = new FormData();
      for (let key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: form,
        url: `/pokemons`
      };
      const { data } = await axiosInstance(options);
      dispatch(createPokemonSuccessAction(data));
    } catch (error) {
      console.log(error);
      dispatch(createPokemonErrorAction(true));
    }
  });
};