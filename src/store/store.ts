import { configureStore } from '@reduxjs/toolkit';

import { swapi } from './api/swapi';
import { charactersSlice } from './reducers/charactersSlice';
import { searchSlice } from './reducers/searchSlice';

export const store = configureStore({
  reducer: {
    [swapi.reducerPath]: swapi.reducer,
    [charactersSlice.name]: charactersSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swapi.middleware),
});

export type RootType = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
