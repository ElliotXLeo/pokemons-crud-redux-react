import { CREATE_POKEMON } from "../types/indexTypes";

const initialState = {
  loading: false
};

const pokemonsReducers = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POKEMON:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default pokemonsReducers;