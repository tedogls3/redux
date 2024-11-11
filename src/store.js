import { createStore } from "redux";
import { todoReducer } from "./features/todoSlice";

const store = createStore(todoReducer);

export default store;
