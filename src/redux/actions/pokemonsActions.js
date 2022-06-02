import axiosInstance from "../../configs/axiosInstance";
import { showToast } from "../../utils/sweetalert";
import {
  DELETE_POKEMON,
  DELETE_POKEMON_ERROR,
  DELETE_POKEMON_SUCCESS,
  UPDATE_POKEMON,
  UPDATE_POKEMON_ERROR,
  UPDATE_POKEMON_SUCCESS
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

const updatePokemonAction = () => ({
  type: UPDATE_POKEMON,
  payload: true
});

const updatePokemonSuccessAction = (pokemon) => ({
  type: UPDATE_POKEMON_SUCCESS,
  payload: pokemon
});

const updatePokemonErrorAction = (error) => ({
  type: UPDATE_POKEMON_ERROR,
  payload: error
});

const updatePokemon = (pokemon) => {
  return (async (dispatch) => {
    dispatch(updatePokemonAction());
    try {
      const form = new FormData();
      for (const key in pokemon) {
        form.append(key, pokemon[key]);
      }
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: form,
        url: `/pokemons/${pokemon._id}`
      };
      const { data } = await axiosInstance(options);
      dispatch(updatePokemonSuccessAction(data));
      showToast('warning', 'Actualizado');
    } catch (error) {
      dispatch(showError(error, updatePokemonErrorAction));
    }
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

export const submitPokemonsForm = (pokemon) => {
  return (async (dispatch) => {
    if (pokemon._id === undefined) {
      await dispatch(createPokemon(pokemon));
    } else {
      await dispatch(updatePokemon(pokemon));
    }
  });
};