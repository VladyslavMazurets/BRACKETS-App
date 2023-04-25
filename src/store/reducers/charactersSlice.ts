import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Result } from '../../models/models';

const initialState: Result[] = [];

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    saveCharactersData(state, action: PayloadAction<Result[]>) {
      const newItems = action.payload.filter(
        (item) =>
          !state.find(
            (person) => person.url.split('/')[5] === item.url.split('/')[5]
          )
      );
      state.push(...newItems);
    },
  },
});

export const charactersSliceAction = charactersSlice.actions;
export const charactersSliceReducer = charactersSlice.reducer;
