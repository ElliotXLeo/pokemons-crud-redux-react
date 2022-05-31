import { HIDE_ALERT, SHOW_ALERT } from "../types/alertsTypes";

const showAlertAction = (alert) => ({
  type: SHOW_ALERT,
  payload: alert
});

const hideAlertAction = () => ({
  type: HIDE_ALERT,
  payload: {}
});

export const showAlert = (alert) => {
  return ((dispatch) => {
    dispatch(showAlertAction(alert));
    setTimeout(() => {
      dispatch(hideAlertAction());
    }, 5000);
  });
};