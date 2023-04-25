import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});

export type RootType = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
