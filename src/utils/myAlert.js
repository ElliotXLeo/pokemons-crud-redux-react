import { showToast } from "./sweetalert";

let alertTimeId = 0;

export const showError = (error, pokemonError) => {
  return (async (dispatch) => {
    clearTimeout(alertTimeId);
    showToast('error', 'Error');
    dispatch(pokemonError(error));
    alertTimeId = setTimeout(() => {
      dispatch(pokemonError({}));
    }, 5000);
  });
};