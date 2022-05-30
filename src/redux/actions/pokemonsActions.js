import axiosInstance from "../../config/axiosInstance";
import { showToast } from "../../utils/sweetalert";
import { CREATE_POKEMON, CREATE_POKEMON_ERROR, CREATE_POKEMON_SUCCESS, READ_POKEMON, READ_POKEMONS, READ_POKEMONS_ERROR, READ_POKEMONS_SUCCESS, READ_POKEMON_ERROR, READ_POKEMON_SUCCESS } from "../types/indexTypes";

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

const readPokemonSuccessAction = (pokemons) => ({
  type: READ_POKEMON_SUCCESS,
  payload: pokemons
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
      showToast('📚', 'Leído');
    } catch (error) {
      showToast('error', 'Error');
      dispatch(readPokemonErrorAction(error));
      setTimeout(() => {
        dispatch(readPokemonErrorAction({}));
      }, 5000);
    }
  });
};