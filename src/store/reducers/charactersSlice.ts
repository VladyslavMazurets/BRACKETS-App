import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPerson } from '../../models/models';

const savedCharacters = JSON.parse(
  localStorage.getItem('characters') || '[]'
) as IPerson[];
const initialState: IPerson[] = savedCharacters;

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    saveCharactersData(state, action: PayloadAction<IPerson[]>) {
      const newItems = action.payload.filter(
        (item) =>
          !state.find(
            (person) => person.url.split('/')[5] === item.url.split('/')[5]
          )
      );

      state.push(...newItems);

      localStorage.setItem('characters', JSON.stringify(state));
    },
  },
});

export const charactersSliceAction = charactersSlice.actions;
export const charactersSliceReducer = charactersSlice.reducer;
