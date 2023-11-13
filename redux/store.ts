import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";
import commentsReducer from "./commentsSlice";

const store = configureStore({
  reducer: {
    api: apiReducer,
    comments: commentsReducer
  },
});

export default store;