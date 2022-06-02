import axiosInstance from "../../configs/axiosInstance";
import { showToast } from "../../utils/sweetalert";
import {
  DELETE_POKEMON,
  DELETE_POKEMON_ERROR,
  DELETE_POKEMON_SUCCESS
} from "../types/pokemonsTypes";

let alertTimeId = 0;

const showError = (error, pokemonErrorAction) => {
  return (async (dispatch) => {
    clearTimeout(alertTimeId);
    showToast('error', 'Error');
    dispatch(pokemonErrorAction(error));
    alertTimeId = setTimeout(() => {
      dispatch(pokemonErrorAction({}));
    }, 5000);
  });
};

const deletePokemonAction = () => ({
  type: DELETE_POKEMON,
  payload: true
});

const deletePokemonSuccessAction = (_id) => ({
  type: DELETE_POKEMON_SUCCESS,
  payload: _id
});

const deletePokemonErrorAction = (error) => ({
  type: DELETE_POKEMON_ERROR,
  payload: error
});

export const deletePokemon = (_id) => {
  return (async (dispatch) => {
    dispatch(deletePokemonAction());
    try {
      const options = {
        method: 'DELETE',
        url: `/pokemons/${_id}`
      };
      const { data } = await axiosInstance(options);
      dispatch(deletePokemonSuccessAction(_id));
      showToast('error', data.message);
    } catch (error) {
      dispatch(showError(error, deletePokemonErrorAction));
    }
  });
};