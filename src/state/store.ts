import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// get's the getState function which is present inside the configureStore
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
