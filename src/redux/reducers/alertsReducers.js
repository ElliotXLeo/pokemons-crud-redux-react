import { SHOW_ALERT } from "../types/alertsTypes";

const initialState = {
  alert: {}
};

const alertsReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ALERT:
      return {
        ...state,
        alert: payload
      };
    default:
      return state;
  }
};

export default alertsReducers;