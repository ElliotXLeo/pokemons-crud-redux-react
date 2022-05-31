import { SHOW_ALERT } from "../types/alertsTypes";

const showAlertAction = (alert) => ({
  type: SHOW_ALERT,
  payload: alert
});

export const showAlert = (alert) => {
  return ((dispatch) => {
    dispatch(showAlertAction(alert));
  });
}