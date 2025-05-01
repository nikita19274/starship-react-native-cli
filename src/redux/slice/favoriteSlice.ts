import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Starship = {
  name: string;
  url: string;
  model: string;
};

type favoriteState = {
  items: Starship[];
};

const initialState: favoriteState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Starship>) => {
      const exist = state.items.find(item => item.url === action.payload.url);
      if (!exist) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.url !== action.payload);
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
