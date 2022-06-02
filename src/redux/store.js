import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlices from "./slices/pokemons.slices";

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlices
  }
});

export default store;

// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import alertsReducers from "./reducers/alertsReducers";
// import pokemonsReducers from "./reducers/pokemonsReducers";

// const rootReducer = combineReducers({
//   pokemonsReducers,
//   alertsReducers
// });

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// export default store;