import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveSearchData: (state, action: PayloadAction<string>) => {
      state = action.payload;
      return state;
    },
  },
});

export const searchSliceAction = searchSlice.actions;
export const searchSliceReducer = searchSlice.reducer;
