import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";
import { showToast } from "../../utils/sweetalert";

const initialState = {
  loading: false,
  error: {},
  pokemon: {},
  pokemons: []
};

const pokemonsSlices = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    fetchCreatePokemonRequest(state, action) {
      return {
        ...state,
        loading: action.payload
      };
    },
    fetchCreatePokemonSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: {},
        pokemons: [...state.pokemons, action.payload]
      };
    },
    fetchCreatePokemonError(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
  }
});

const {
  fetchCreatePokemonRequest,
  fetchCreatePokemonSuccess,
  fetchCreatePokemonError
} = pokemonsSlices.actions;

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

export const fetchCreatePokemon = (pokemon) => {
  return (async (dispatch) => {
    dispatch(fetchCreatePokemonRequest(true));
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
      dispatch(fetchCreatePokemonSuccess(data));
      showToast('success', 'Creado');
    } catch (error) {
      dispatch(showError(error, fetchCreatePokemonError));
    }
  });
};

export default pokemonsSlices.reducer;