import {createStore} from "redux";
import asyncReducer from "../reducer/index";

const store = createStore(asyncReducer);
window.store = store
export default store;