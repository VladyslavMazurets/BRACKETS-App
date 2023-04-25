import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Result } from '../../models/models';

const initialState: Result[] = [];

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    saveCharactersData(state, action: PayloadAction<Result[]>) {
      return (state = action.payload);
    },
  },
});

export const charactersSliceAction = charactersSlice.actions;
export const charactersSliceReducer = charactersSlice.reducer;
