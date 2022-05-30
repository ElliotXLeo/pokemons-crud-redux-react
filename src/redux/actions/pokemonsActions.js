import axiosInstance from "../../config/axiosInstance";
import { showToast } from "../../utils/sweetalert";
import { CREATE_POKEMON, CREATE_POKEMON_ERROR, CREATE_POKEMON_SUCCESS, READ_POKEMON, READ_POKEMONS, READ_POKEMONS_ERROR, READ_POKEMONS_SUCCESS, READ_POKEMON_ERROR, READ_POKEMON_SUCCESS, UPDATE_POKEMON, UPDATE_POKEMON_ERROR, UPDATE_POKEMON_SUCCESS } from "../types/indexTypes";

const createPokemonAction = () => ({
  type: CREATE_POKEMON,
  payload: true
});

const createPokemonSuccessAction = (pokemon) => ({
  type: CREATE_POKEMON_SUCCESS,
  payload: pokemon
});

const createPokemonErrorAction = (error) => ({
  type: CREATE_POKEMON_ERROR,
  payload: error
});

const createPokemon = (pokemon) => {
  return (async (dispatch) => {
    dispatch(createPokemonAction());
    try {
      const form = new FormData();
      for (const key in pokemon) {
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
      showToast('success', 'Creado');
    } catch (error) {
      showToast('error', 'Error');
      dispatch(createPokemonErrorAction(error));
      setTimeout(() => {
        dispatch(createPokemonErrorAction({}));
      }, 5000);
    }
  });
};

const readPokemonsAction = () => ({
  type: READ_POKEMONS,
  payload: true
});

const readPokemonsSuccessAction = (pokemons) => ({
  type: READ_POKEMONS_SUCCESS,
  payload: pokemons
});

const readPokemonsErrorAction = (error) => ({
  type: READ_POKEMONS_ERROR,
  payload: error
});

export const readPokemons = () => {
  return (async (dispatch) => {
    dispatch(readPokemonsAction());
    try {
      const options = {
        method: 'GET',
        url: `/pokemons`
      };
      const { data } = await axiosInstance(options);
      dispatch(readPokemonsSuccessAction(data));
    } catch (error) {
      showToast('error', 'Error');
      dispatch(readPokemonsErrorAction(error));
      setTimeout(() => {
        dispatch(readPokemonsErrorAction({}));
      }, 5000);
    }
  });
};

const readPokemonAction = () => ({
  type: READ_POKEMON,
  payload: true
});

const readPokemonSuccessAction = (pokemon) => ({
  type: READ_POKEMON_SUCCESS,
  payload: pokemon
});

const readPokemonErrorAction = (error) => ({
  type: READ_POKEMON_ERROR,
  payload: error
});

export const readPokemon = (_id) => {
  return (async (dispatch) => {
    dispatch(readPokemonAction());
    try {
      const options = {
        method: 'GET',
        url: `/pokemons/${_id}`
      };
      const { data } = await axiosInstance(options);
      dispatch(readPokemonSuccessAction(data));
      showToast('info', 'Leído');
    } catch (error) {
      showToast('error', 'Error');
      dispatch(readPokemonErrorAction(error));
      setTimeout(() => {
        dispatch(readPokemonErrorAction({}));
      }, 5000);
    }
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
      showToast('error', 'Error');
      dispatch(updatePokemonErrorAction(error));
      setTimeout(() => {
        dispatch(updatePokemonErrorAction({}));
      }, 5000);
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