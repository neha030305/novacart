import { createSlice } from '@reduxjs/toolkit';

const storedFavorites = localStorage.getItem('favorites');

const initialState = {
  items: storedFavorites ? JSON.parse(storedFavorites) : [],
};

const favoritesSlice = createSlice({
  name: 'favorites',

  initialState,

  reducers: {
    addFavorite: (state: any, action) => {
  const exists = state.items.find(
    (item: any) => item.id === action.payload.id
  );

  if (!exists) {
    state.items.push(action.payload);

    localStorage.setItem(
      'favorites',
      JSON.stringify(state.items)
    );
  }
},

    removeFavorite: (state: any, action) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );

      localStorage.setItem(
        'favorites',
        JSON.stringify(state.items)
      );
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;