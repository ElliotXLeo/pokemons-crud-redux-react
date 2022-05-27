import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import pokemonsReducers from "./reducers/pokemonsReducers";

const store = createStore(pokemonsReducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;