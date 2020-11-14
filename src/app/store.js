import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import dataReducer from "../features/data/dataSlice";
import choicesReducer from "../features/choices/choicesSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
    choices: choicesReducer,
  },
});
